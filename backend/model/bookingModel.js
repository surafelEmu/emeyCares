const mongoose = require('mongoose') ;

const bookingSchema = mongoose.Schema({
    // client: {
    //     type: mongoose.Schema.ObjectId ,
    //     ref: 'Client'
    // } ,
    caregiver: {
        type: mongoose.Schema.ObjectId ,
        ref: 'Caregiver'
    } ,
    userId: {
        type: mongoose.Schema.ObjectId ,
        ref: 'User'
    } ,
    date: {
        type: Date ,
        default: Date.now() 
    } ,
    startDate: {
        type: Date ,
        required: [true , 'When do you expecting to start']
    } ,
    shift:[ {

        startTime: {
            type: Date 
        },
        endTime: {
            type: Date
        }
       
    }] ,
    finishDate: {
        type: Date ,
        default: this.startDate + '6 month'
    }
})

module.exports = mongoose.model('Booking' , bookingSchema)