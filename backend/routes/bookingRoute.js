const bookingController = require('../controllers/bookingController')
const auth = require('../middleware/auth')
const express = require('express') ;

const router = express.Router() ;


//////check for Authentication////////
router.use(auth.isAuthUser)
router.route('/create').post( bookingController.create) ;

module.exports = router ;