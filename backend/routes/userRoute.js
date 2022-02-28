const userController = require('../controllers/userController.js') ;
const authController = require('../controllers/authController') ;
const auth = require('../middleware/auth') ;

const express = require('express')

const router = express.Router() ;

router.route('/').get( 
    auth.isAuthUser ,
     userController.getAllUsers) ;

router.route('/signup').post(authController.signup) ;

router.route('/signin').post(authController.signIn) ;

router.route('/me/update').put(auth.isAuthUser , userController.updateProfile) ;

router.route('/me/updatePassword').put(auth.isAuthUser , userController.updatePassword) ;

/////////////Admin//////////////

// router.use( auth.restrictTo('admin'))

router.route('/admin/deleteUser/:id').delete(userController.deleteUser) ;

router.route('/admin/updateUser/:id').put(userController.updateUser)


module.exports = router ;