const Router=require('express')
const router=new Router()
const doctorsController=require('../controllers/doctorsController')
const checkRole=require('../middleware/checkRoleMiddleware')
const validate=require('../middleware/validate')
const doctorValidation=require('../validations/doctors')


router.post('/',checkRole('MENEGER'),validate(doctorValidation.create) ,doctorsController.create)
router.get('/',doctorsController.getAll)

module.exports=router