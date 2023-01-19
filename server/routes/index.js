const Router=require('express')
const router=new Router()
const talonsRouter=require('./talonsRouter')
const userRouter=require('./userRouter')
const doctorRouter=require('./doctorRouter')
const hospitalsRouter=require('./hospitalsRouter')
const feedbackRouter=require('./feedbackRouter')
const bookedTalonsRouter=require('./bookedTalonsRouter')

router.use('/users', userRouter)
router.use('/doctors',doctorRouter)
router.use('/hospitals',hospitalsRouter)
router.use('/talons', talonsRouter)
router.use('/feedback', feedbackRouter)
router.use('/booked_talons', bookedTalonsRouter)

module.exports=router