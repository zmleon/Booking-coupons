const Router=require('express')
const router=new Router()
const hospitalController=require('../controllers/hospitalController')
const checkRole=require('../middleware/checkRoleMiddleware')
const validate=require('../middleware/validate')
const hospitalValidation=require('../validations/hospital')

router.post('/',checkRole('MENEGER') ,validate(hospitalValidation.create),hospitalController.create)
router.get('/',hospitalController.getAll)

module.exports=router