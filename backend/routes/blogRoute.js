const blogController = require('../controllers/blogController') ;

const express = require('express') ;

const router = express.Router() ;

router.route('/create').post(blogController.create) ;

module.exports = router ;