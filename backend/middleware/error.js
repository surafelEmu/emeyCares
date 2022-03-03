const ErrorHandler = require('../util/errorHandler') ;

module.exports = (err , req , res , next) => {

    console.log('error occured')
    const errMessage = err.message || 'Internal Server Error' ;
    const errStatus = err.status || 500 ;

    console.log(errMessage) ;
    console.log(errStatus)
    if(process.env.NODE_ENV == 'DEVELOPEMENT') {
        console.log("i am here")
        res.status(errStatus).json({
            success: false ,
            message: errMessage ,
            error: err ,
            stack: err.stack 

        }) ;
    }

    
    if(process.env.NODE_ENV == 'PRODUCTION') {
        console.log("here in prod")
        let error = {...err}

        error.message = err.message ;
        if(err.name == 'CastError') {
            const message =  `Resource not found. Invalid: ${err.path}`
            error = new ErrorHandler(message , 400)
        }

        if(err.name == 'ValidationError') {
            const message = Object.values(err.errors).map(value => value.message) ;
            error = new ErrorHandler(message , 400)
        }

        // wrong mongoose object Id error
        res.status(statusCode).json({
            success: false ,
            message: message || 'Internal Server Error'
        })
    }

}