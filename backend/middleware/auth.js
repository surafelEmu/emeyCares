const User = require('../model/userModel') ;
const jwt = require('jsonwebtoken') ;
const ErrorHandler = require('../util/errorHandler')

exports.isAuthUser = async (req ,res ,next) => {

    try{
        // console.log(req.headers.cookie) ;
        const token = req.headers.cookie ;
        console.log(req.cookie) ;
        
        if(!token) return next(new ErrorHandler('please log In first to get access' , 400)) ;
        
        console.log(token)

        const splited = token.split('=') ;
        console.log(splited[1]) ;
        const decoded = jwt.verify(splited[1] , process.env.JWTSECRET) ;
    
        req.user = await User.findById(decoded.id) ;
    
        next() ;
    }catch(error) {
        res.status(400).json({
            error
        })
    }

   

}


exports.restrictTo = (...roles) => {

    return async (req , res , next) => { 

        const token = req.headers.cookie.split('=')[1] ;

        if(!token ) {
            return next(ErrorHandler('login first to get access' , 401)) ;
        }

        const decoded = jwt.decode(token) ;

        console.log(decoded.id) ;

        const {role} = await User.findById(decoded.id) ;


        console.log(role)

        // const {role} = User.findById(req.user.id) ;
        
        if(!roles.includes(role) ) {
           return  next( new ErrorHandler('You are not authorized to ge access')) ;
        } 
     
        next() ;

    }

}