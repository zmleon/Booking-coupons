const Router=require('express')
const router=new Router()
const talonsController=require('../controllers/talonsController')
const checkRole=require('../middleware/checkRoleMiddleware')
const validate=require('../middleware/validate')
const talonValidation=require('../validations/talons')


router.post('/',checkRole('MENEGER') ,validate(talonValidation.create),talonsController.create)
router.get('/',talonsController.getAll)
router.get('/:id',talonsController.getOne)


module.exports=router 