const mongoose = require('mongoose') ;

const commentSchema = mongoose.Schema({
    date: {
        type: Date ,
        default: Date.now()
    } ,
    comment: {
        type: String ,
        required: [true , 'please provide your comment.']
    } ,
    userId: {
        type: mongoose.Schema.ObjectId ,
        ref: 'User'
    } ,
    rating: {
        type: Number ,
        default: 3
    } ,
    repalycomments: [
        {
            type: mongoose.Schema.ObjectId ,
            ref: 'Comment'
        }
    ]
}) ;

module.exports = mongoose.model('Comment' , commentSchema) ;