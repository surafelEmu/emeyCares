const User = require('../model/userModel') ;
const catchAsync = require('../middleware/catchAsync')
const sendToken = require('../util/sendToken')

exports.signup = catchAsync(

    async (req , res ,next ) => {
       
            const {name , email , password} = req.body ;
            console.log(name) ;
            const user = await User.create({
                name , 
                email ,
                password
            }) ;
    
            sendToken(user , 200 , res) ;
    
    
        
    }
) 

exports.signIn = catchAsync(

    async (req , res , next) => {
       
           const {email , password } = req.body ;
   
           const user = await User.findOne({email}).select('+password') ;
       
           if(!user) {
               return next(new Error('no user is found with this email address')) ;
           }
   
        //    console.log(user) ;
       
          const isMatch = await user.comparePassword(password) ;
   
          if(!isMatch) {
               return next(new Error('the password you entered does not match')) ;
          }


          req.user = user ;

          
          console.log(req.user) ;
   
          sendToken(user , 200 , res) ;
   
       
      
   
   }
)