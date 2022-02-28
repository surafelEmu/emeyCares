const User = require(  '../model/userModel.js') ;
const sendToken = require('../util/sendToken') ;
const catchAsync = require('../middleware/catchAsync');
const ErrorHandler = require('../util/errorHandler.js');
const { deleteModel } = require('mongoose');

exports.updateProfile = catchAsync( async (req , res ,next ) => {

    const {name , email } = req.body ;

    //const user = await User.findById(req.user.id) ;

    // user.name = name ;
    // user.email = email ;

    // await user.save() ;

    const user = await User.findByIdAndUpdate(req.user.id , {
        name: name ,
        email: email 
    }) ;

    res.status(200).json({
        success: true ,
        data: user 

    })

}

)


exports.updatePassword = catchAsync( async (req , res , next) => {


    const {oldPassword , password } = req.body ;

    const user = await User.findById(req.user.id).select('+password') ;

    console.log() ;
    const isMatch = await user.comparePassword(oldPassword) ;

    if(!isMatch) {
        return next(new ErrorHandler('Old Password does not mutch' , 401)) ;
    }

    user.password = password ;

    await user.save() ;

    res.status(200).json({
        success: true , 
        data: user
    })



}) ;


///////Admin_Functionalities///////////

exports.deleteUser = catchAsync(async (req , res , next) => {

   
    const user = await User.findByIdAndDelete(req.params.id) ;

    if(!user) {
        return next(ErrorHandler('user is not found with this ID' , 404 ))
    }

    res.status(200).json({
        success: true ,
        message: 'Successfully Deleted'
    })


})


exports.getAllUsers = catchAsync(  async (req , res , next) => {
    
    console.log('1')
        const user = await User.find() ;

        res.json({
            sucess: true ,
            data: user
        })
        

}) ;


exports.updateUser = catchAsync ( async (req , res , next) => {

    const {name , role} = req.body ;

    const user = await User.findByIdAndUpdate(req.params.id , {
        name ,
        role
    })

    if(!user) {
        return next(new ErrorHandler('user not found' , 404)) ;
    }

    res.status(200).json({
        success: true ,
        message: 'successfully updated user'
    })
})