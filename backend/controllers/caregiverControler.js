const Caregiver = require('../model/caregiversModel.js')
const catchAsync = require('../middleware/catchAsync') 

exports.createCaregiver = catchAsync(async (req , res , next) => {
    try{

        console.log(req.body)
        const caregiver = await Caregiver.create(req.body) ;

        res.status(200).json({
            caregiver
        })
    }catch(error) {
        res.status(400).json({
            error: error 
        })

    }
})


exports.getAllCaregivers = catchAsync(async (req , res ,next) => {

    const caregivers = await Caregiver.find() ;

    res.status(200).json({
        success: true ,
        data: caregivers 

    })
})