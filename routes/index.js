const express = require('express');
const router  = express.Router();               // Enrutador y metodo devuelve un objeto 
const indexController = require('../controllers/index')


router.get('/', indexController.index);

router.get('/products', indexController.listOfProducts);

router.post('/new-product', indexController.newProduct);



module.exports = router;