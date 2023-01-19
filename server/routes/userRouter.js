const Router=require('express')
const userController = require('../controllers/userController')
const router=new Router()
const UserController=require('../controllers/userController')
const authMiddleware=require('../middleware/authMiddleware')

const mongoLogger=require('../MongoLogger')
const validate=require('../middleware/validate')
const userValidation = require('../validations/UserScheme')

router.use(mongoLogger.LogHttpEvent);
router.post('/registration', validate(userValidation.registration),userController.registration)
router.post('/login',validate(userValidation.login),userController.login)
router.get('/auth',authMiddleware, UserController.check)

module.exports=router 