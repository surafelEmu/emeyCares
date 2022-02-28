const mongoose = require('mongoose') ;

const blogSchema = mongoose.Schema({
    writer: {
        type: mongoose.Schema.ObjectId ,
        ref: 'User' ,
        
    } ,
    title: {
        type: String ,
        required: [true , 'please provide the title of the blog'] 
    } ,
    date: {
        type: Date ,
        default: Date.now()
    } ,
    catagory: {
        type: String ,
        enum:{

         values: ['elderly' , 'autism' , 'healthcare'] },
        required: [true , 'please provide the catagory of the blog']
    } ,
    comments: [{
        type: mongoose.Schema.ObjectId ,
        ref: 'Comment'
    }]    


})

module.exports = mongoose.model('Blog' , blogSchema) ;