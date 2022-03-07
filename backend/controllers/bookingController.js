const Booking = require('../model/bookingModel') ;
const catchAsync = require('../middleware/catchAsync') ;
const Client = require('../model/clientModel') ;

exports.create = catchAsync( async (req , res , next) => {



        req.body.userId = req.user._id ;        

        const { client0 } = req.body ;

        const client = await Client.create() ;

        req.body.client = client ;
        
        const booking = await Booking.create(req.body) ;



        res.status(200).json({
            success: true ,
            booking
        })
    
  
}) ;