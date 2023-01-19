const {Talons, Booked_talons}=require('../models/models')
const apiError=require('../error/apiError.js')
const { nextTick } = require('process')
class talonsController{
        async create(req,res,next){
            try{
    const {name,description,hospitalId, doctorId,date}=req.body
    const talons=await Talons.create({name,description,hospitalId, doctorId,date})
    return res.json(talons)}
    catch(e){
        next(apiError.badRequest(e.message))
    }
        }
    async getAll(req,res){
        const {hospitalId,doctorId}=req.query
        let talons;
        if(!hospitalId && !doctorId){
            talons=await Talons.findAll()
        }
        if(hospitalId && !doctorId){
            talons=await Talons.findAll({where:{hospitalId}})
        }
        if(!hospitalId && doctorId){
            talons=await Talons.findAll({where:{doctorId}})            
        }
        if(hospitalId && doctorId){
            talons=await Talons.findAll({where:{doctorId, hospitalId}})
        }

        return res.json(talons)

    }
    async getOne(req,res){
        const {id}=req.params
        const talons=await Talons.findOne({where:{id}})
return res.json(talons)
    }
}

module.exports=new talonsController()