const {Booked_talons}=require('../models/models')
const {Talons}=require('../models/models')
const apiError=require('../error/apiError.js')
class bookedtalonsController{
        async create(req,res,next){
            try{
    const {name,description,hospitalId, doctorId,date,userId,talonId}=req.body
    const booked_talons=await Booked_talons.create({name,description,hospitalId, doctorId,date,userId,talonId})
    return res.json(booked_talons)}
    catch(e){
        next(apiError.badRequest(e.message))
    }
        }
    async getAll(req,res){
        const {hospitalId,doctorId}=req.query
        let booked_talons;
        if(!hospitalId && !doctorId){
            booked_talons=await Booked_talons.findAll()
        }
        if(hospitalId && !doctorId){
            booked_talons=await Booked_talons.findAll({where:{hospitalId}})
        }
        if(!hospitalId && doctorId){
            booked_talons=await Booked_talons.findAll({where:{doctorId}})            
        }
        if(hospitalId && doctorId){
            booked_talons=await Booked_talons.findAll({where:{doctorId, hospitalId}})
        }

        return res.json(booked_talons)

    }
    async getOne(req,res){
        const {id}=req.params
        const booked_talons=await Booked_talons.findOne({where:{id}})
return res.json(booked_talons)
    }
}

module.exports=new bookedtalonsController()