const Router=require('express')
const bookedTalonsController = require('../controllers/bookedTalonsController')
const router=new Router()
const checkRole=require('../middleware/checkRoleMiddleware')
const validate=require('../middleware/validate')
const bookedtalonValidation=require('../validations/bookedtalons')

router.post('/',validate(bookedtalonValidation.create),bookedTalonsController.create)
router.get('/',bookedTalonsController.getAll)
router.get('/:id',bookedTalonsController.getOne)

module.exports=router