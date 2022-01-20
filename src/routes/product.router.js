const { Router } = require('express');
const express = require('express');

const ProductService = require('../services/product.service')

const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res) => {
    const products = await service.findAll();
    res.json(products);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params.id
    const product = await service.findById(id);
    res.json(product);
});

module.exports = router;