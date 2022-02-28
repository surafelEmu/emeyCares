const express = require('express') ;
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoute.js')
const caregiverRoute = require('./routes/caregiverRoute.js') ;
const clientRoute = require('./routes/clientRoute') ;
const blogRoute = require('./routes/blogRoute') ;
const commentRoute = require('./routes/commentRoute')
const bookingRoute = require('./routes/bookingRoute')

const errHandler = require('./middleware/error') ;

const app = express() ;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.json()) ;

app.use('/api/v1/user' , userRoute) ;
app.use('/api/v1/caregiver' , caregiverRoute ) ;
app.use('/api/v1/client' , clientRoute ) ;
app.use('/api/v1/blog' , blogRoute) ;
app.use('/api/v1/comment' , commentRoute) ;
app.use('/api/v1/book' , bookingRoute) ;

app.get('/' , (req , res , next) => {
    res.send({
        success: true ,
        message: ""
    })
}) ;


app.use(errHandler) ;

module.exports = app ;