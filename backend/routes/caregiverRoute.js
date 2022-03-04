const caregiverController = require('../controllers/caregiverControler.js') ;

const express = require('express') ;

const router = express.Router() ;

router.route('/create').post(caregiverController.createCaregiver) ;

router.route('/all').get(caregiverController.getAllCaregivers) ;

router.route('/:id').get(caregiverController.getCaregiver) ;


module.exports = router ;