const uuid=require('uuid')
const path=require('path')
const {Doctors, Hospitals}=require('../models/models')
const apiError=require('../error/apiError.js')
class doctorsController{
    async create(req,res,next){
        try{
const {last_name,first_name,patronymic,email,phone_number,position,hospitalId}=req.body
const{photo}=req.files     
let fileName= uuid.v4()+".jpg" 
photo.mv(path.resolve(__dirname,'..','static', fileName))
const doctors=await Doctors.create({last_name,first_name,patronymic,email,phone_number,position,hospitalId,photo:fileName})
return res.json(doctors)}
catch(e){
    next(apiError.badRequest(e.message))
}
    }
    async getAll(req,res){
        const {hospitalId}=req.query
        let doctors;
        if(!hospitalId){
            doctors=await Doctors.findAll()
        }
        if(hospitalId){
            doctors=await Doctors.findAll({where:{hospitalId}})
        }
        
        return res.json(doctors)
    }
}

module.exports=new doctorsController() 