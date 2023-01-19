const Router=require('express')
const router=new Router()
const feedbackController=require('../controllers/feedbackController')
const checkRole=require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('USER') ,feedbackController.create)
router.get('/',feedbackController.getAll)

module.exports=router