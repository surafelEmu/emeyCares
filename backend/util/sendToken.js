module.exports = function(user , statusCode , res) {
    const token =  user.getJwtToken() ;

    const option = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 100 
        ) ,
        httpOnly: true 
    }  ;

    
    res.status(statusCode).cookie('token' , token , option).json({
        success: true ,
        token ,
        user 

    })
}