const uuid=require('uuid')
const path=require('path')
const {Hospitals}=require('../models/models')
const apiError=require('../error/apiError.js')
const { nextTick } = require('process')

class hospitalController{
        async create(req,res,next){
            try{
    const {name,email,phone_number,city,adress}=req.body
    const{photo}=req.files     
let fileName= uuid.v4()+".jpg" 
photo.mv(path.resolve(__dirname,'..','static', fileName))
    const hospitals=await Hospitals.create({name,email,phone_number,city,adress,photo:fileName})
    return res.json(hospitals)}
    catch(e){
        next(apiError.badRequest(e.message))
    }

        }
    async getAll(req,res){
        const hospitals=await Hospitals.findAll()
        return res.json(hospitals)
    }
}

module.exports=new hospitalController()