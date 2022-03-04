const Caregiver = require('../model/caregiversModel.js')
const catchAsync = require('../middleware/catchAsync') 

exports.createCaregiver = catchAsync(async (req , res , next) => {
    
        console.log(req.body)
        const caregiver = await Caregiver.create(req.body) ;

        res.status(200).json({
            caregiver
        })

})


exports.getAllCaregivers = catchAsync(async (req , res ,next) => {

    const caregivers = await Caregiver.find() ;

    res.status(200).json({
        success: true ,
        data: caregivers 

    })
})


exports.getCaregiver = catchAsync(async (req , res , next) => {

    const id = req.params.id ;

    const caregiver = await Caregiver.findById(id) ;

    res.status(200).json({
        success: true ,
        data: caregiver
    })
}) ;
