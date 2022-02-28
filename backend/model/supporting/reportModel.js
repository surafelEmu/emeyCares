const mongoose = require('mongoose') ;

const reportSchema = mongoose.Schema({
    comment_by_caregiver: {
        type: mongoose.Schema.ObjectId ,
        ref: 'Comment'
    } ,
    comment_by_client: {
        type: mongoose.Schema.ObjectId ,
        ref: 'Comment'
    } ,
    current_status: {
        type: String 
    }
})  ;

module.exports = mongoose.model('Report' , reportSchema) ;