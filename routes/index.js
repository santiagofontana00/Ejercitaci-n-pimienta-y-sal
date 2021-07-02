var express = require('express');
var router = express.Router();
var mainController = require('../controllers/mainController.js'); 

/* GET home page. */
router.get('/', mainController.index);

router.get('/detalle/:id', mainController.menu);





module.exports = router;
