const express = require('express');
const router = express.Router();
//  /products is already added in base path
const { addToCart, fetchCartByUser, deleteFromCart, updateCart } = require('../controller/Cart');

router.post('/', addToCart)
      .get('/', fetchCartByUser)
      .delete('/:id', deleteFromCart)
      .patch('/:id', updateCart)


exports.router = router;
    