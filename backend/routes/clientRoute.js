const clientController = require('../controllers/clientController') ;

const express = require('express') ;

const router = express.Router() ;

router.route('/create').post(clientController.create) ;

module.exports = router ;