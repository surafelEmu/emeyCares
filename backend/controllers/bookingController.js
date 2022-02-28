const Booking = require('../model/bookingModel') ;
const catchAsync = require('../middleware/catchAsync') ;


exports.create = catchAsync( async (req , res , next) => {



        req.body.userId = req.user._id ;        

        const booking = await Booking.create(req.body) ;



        res.status(200).json({
            success: true ,
            booking
        })
    
  
}) ;