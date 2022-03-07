const mongoose = require(  "mongoose" );
const validator = require("validator")

const caregiver = new mongoose.Schema({
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

    // password: {
    //     type: String ,
    //     required: [true , 'please provide a password'] ,
    //     minlength: 8 ,
    //     select: false 
    // } ,

    age: {
        type: Number ,
        required: [true , 'please provide your age'] , 

    } ,
    // profession: [{
    //     name: {
    //         type: String ,
    //         required: [true , 'please provide a name of your profession'] ,
    //     } ,
    //     yrsOfExp: {
    //         type: Number ,
    //         required: [true , 'please provide the years of experience with this field']
    //     } ,
    //     place: {
    //         type: String ,
    //         required: [true , 'please provide the place you worked in this feild']
    //     } ,
    //     stillWorking: {
    //         type: Boolean ,
    //         default: false
    //     }
    // }] ,
    // language: [{
    //     name: {
    //         type: String ,
    //         required: true 
    //     } ,
    //     status: {
    //         enum: ["average" , 'good' , 'expert' ]
    //     }
    // }] ,
    comments: [{
        type: mongoose.Schema.ObjectId ,
        ref: 'Comment'
    }] ,
    // rating: {
    //     type: Number 
    // } ,
    isBooked: {
        type: Boolean ,
        default: false
    } ,
    shifts: [
        {
            start: {
                type: Date , 
                required: true 
            } ,
            end: {
                type: Date ,
                required: true 
            }
        }
    ] ,
    bookings: [{
        type: mongoose.Schema.ObjectId ,
        ref: 'Booking'
    }] ,
    // training: [
    //     {
    //         hrs: {
    //             type: String ,
    //             reaquired: [true , 'how many hrs did you train for this particular course']
    //         } ,
    //         name: {
    //             type: String ,
    //             required: [true , 'what kind of training did you take'] 
    //         } ,
    //         Instructor: {
    //             type: String ,
    //             required: [true , 'Who was the instructor giving this course']
    //         } ,
    //         objective: {
    //             type: String ,
    //             required: [true , 'what was the objective of the course']
    //         }
    //     }
    // ] ,
    waitList: [{
        type: mongoose.Schema.ObjectId ,
        ref: 'Booking'
    }] ,
    // client: [
    //     {
    //         type: mongoose.Schema.ObjectId ,
    //         ref: 'User'
    //     }
    // ] ,
    // report: [
    //     {
    //         type: mongoose.Schema.ObjectId ,
    //         ref: 'Comment'
    //     }
    // ]
}) ;

module.exports = mongoose.model('Caregiver' , caregiver) ;