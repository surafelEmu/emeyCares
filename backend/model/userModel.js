const mongoose = require('mongoose' );
const validator = require('validator' );
const jwt = require('jsonwebtoken') ;
const bcrypt = require('bcryptjs')
const catchAsync = require('../middleware/catchAsync')
const userSchema = new mongoose.Schema({
    name: {
        type: String ,
        required: [true , 'please provide your name'] ,
        maxlength: [40 ,  'A user Name must not be more than 40 charactors.'] ,
        minlength: [2 , 'A user name can not be less than 2 charactors'] 
    } ,

    email: {
        type: String ,
        required: [true , 'please provide your email address'] ,
        unique: true ,
        validate: [validator.isEmail , 'Please provide a valid email address.']   

    } ,

    password: {
        type: String ,
        required: [true , 'please provide a password'] ,
        minlength: 8 ,
        select: false 
    } ,

    role: {
        type: String ,
        enum: ['user' , 'admin'] , 
        default: 'user'
    }
}) ;

userSchema.pre('save' , async function() {
    if(!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password , 10) ;
})



userSchema.methods.getJwtToken = function() {
    return jwt.sign({id: this.id} , process.env.JWTSECRET , {
        expiresIn: process.env.JWT_EXPIRE_TIME
    })
}
userSchema.methods.comparePassword = async function(enteredPassword) {
  
    try{
        console.log(enteredPassword)
        return await bcrypt.compare(enteredPassword , this.password) ;
    }catch(error) {
        console.log(error)
    }

}


module.exports = mongoose.model('User' , userSchema) ;