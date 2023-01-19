const uuid=require('uuid')
const path=require('path')
const apiError = require('../error/apiError');
const bcrypt = require('bcrypt')
const { Users, Booked_talons } = require('../models/models')
const jwt = require('jsonwebtoken')
const generateJwt=(id,email,role)=>{
return jwt.sign({ id, email, role },
     process.env.SECRET_KEY, 
     { expiresIn: '24h' })
}

class UserController {
    async registration(req, res, next) {
        const { email, password, role, last_name,first_name,patronymic,login,phone_number,date_birth} = req.body
const {photo}=req.files
let fileName= uuid.v4()+".jpg" 
photo.mv(path.resolve(__dirname,'..','static', fileName))
        if (!email || !password) {
            return next(apiError.badRequest('Некорректный email или пароль'))
        }
        const candidate = await Users.findOne({ where: { email } })
        if (candidate) {
            return next(apiError.badRequest('Пользователь c таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await Users.create({ email, role, password: hashPassword ,last_name,first_name,patronymic,login,phone_number,date_birth,photo:fileName})
        const booked_talons = await Booked_talons.create({ userId: user.id })
        const token = generateJwt(user.id, user.email,user.role)

        return res.json({ token })

    }

    async login(req, res,next) {
        const {email,password}=req.body
        const user=await Users.findOne({where:{email}})
        if (!user){
            return next(apiError.internal('Пользователь не найден'))
        }
        let comparePassword=bcrypt.compareSync(password,user.password)
        if(!comparePassword){
            return next(apiError.internal('Неверный пароль'))
         
        }
        const token = generateJwt(user.id, user.email,user.role)
        return res.json({ token })

    }



    async check(req, res, next) {
        const token =generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()