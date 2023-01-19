const {Feedback}=require('../models/models')
const apiError=require('../error/apiError.js')
const {nextTick} = require('process')

class feedbackController{
        async create(req,res,next){
            try{
    const {title,description,userId}=req.body
    const feedback=await Feedback.create({title,description,userId})
    return res.json(feedback)}
    catch(e){
        next(apiError.badRequest(e.message))
    }
        }
    async getAll(req,res){
        const feedback=await Feedback.findAll()
        return res.json(feedback)
    }
}

module.exports=new feedbackController()