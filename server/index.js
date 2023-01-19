require('dotenv').config()
const express=require('express')
const sequelize=require('./db')
const models=require('./models/models.js')
const cors=require('cors')
const router=require('./routes/index.js')
const errorHandler=require('./middleware/ErrorHandlingMiddleware')
const fileUpload=require('express-fileupload')
const PORT =process.env.PORT || 5000

const app=express()
const mongoose=require('mongoose')
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)
const mongo = require('./mongo/Mongo');

app.use(errorHandler)


const start =async()=>{
    try{
       await sequelize.authenticate()
       await sequelize.sync()
        app.listen(PORT, ()=>console.log('Server started on port 5000'))
    }
    catch(e){
        console.log(e)
    }
}

start()

