const mongoose = require('mongoose') ;

const clientSchema = mongoose.Schema({
    name: {
        type: String ,
        required: [true , 'please provide your name']
    } ,
    // age: {
    //     type: Number ,
    //     required: [true , 'please provide your age']
    // } ,
    // disabilities: [{
      
    //     name: {
    //         type: String ,
    //         required: [true , 'please provide the name of the disability']
    //     } ,
    //     sinceWhen: {
    //         type: Date ,
            
    //     } ,
    //     takingTreatment: {
    //         type: Boolean ,
    //         required: [true , 'please specify if you are taking any treatment for your disability']
    //     } ,
    //     medication: [{
    //         type: String ,
    //         default: 'none'
    //     } ]
    // }] ,

    // healthDifficulties: [{
    //     date: {
    //         type: Date ,
    //     } ,
    //     default: {}
    // }] ,


    // doMedicate: {
    //     type: Boolean ,
    //     required: [true , 'please provide as if you medicate with any substance']
    // } ,

    medication: [{
        type: mongoose.Schema.ObjectId ,
        ref: 'Medication'
    }]

    // medication: [{
    //     do: {
    //         type: Boolean ,
    //         required: [true , 'please let us know if you are on any kind of medication']
    //     } ,
    //     name: {
    //         type: String ,
    //         validate:{ validator: function() {
    //             return this.doMedicate;
    //         } ,
    //         message: 'Please provide a name of your meditation'
    //     }
    //     } ,
    //     dose: {
    //         type: String ,
    //         validate:{ validator: function() {
    //             return this.doMedicate;
    //         } ,
    //         message: 'Please provide a name of your meditation'
    //     }
    //     } ,
    //     description: {
    //         type: String ,
    //         validate:{ validator: function() {
    //             return this.doMedicate ;
    //         } ,
    //         message: 'Please provide a description for your meditation'
    //     }
    //     } 
    // }]  
    //,
    // careneeded: [{
    //     description: {
    //         type: String ,

    //     }
    // }] ,
    // report: [{
    //     type: mongoose.Schema.ObjectId ,
    //     ref: 'Report'
    // }] , 
    // photo: String 
}) ;

module.exports = mongoose.model('Client' , clientSchema) ;