const commentController = require('../controllers/commentController') ;
const auth = require('../middleware/auth')

const express = require('express') ;

const router = express.Router() ;

router.route('/create').post( auth.isAuthUser , commentController.create) ;


router.use(auth.restrictTo('admin')) ;

router.route('/delete/:id').delete(commentController.removeComment) ;

module.exports = router ;