const app = require('./app.js')
const mongoose = require('mongoose')
const dotenv = require('dotenv') ;


dotenv.config({path: './config.env'}) ;


mongoose.connect(process.env.DATABASE_LOCAL , () => {
    console.log('successfully connected to database')
})

app.listen(3000 , () => {
    console.log('successfully connected') ;
})