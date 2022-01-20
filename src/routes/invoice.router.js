const { Router } = require('express');
const express = require('express');

const InvoiceService = require('../services/invoice.service')

const router = express.Router();
const service = new InvoiceService();

router.get('/', async (req, res) => {
    const invoices = await service.findAll();
    res.json(invoices);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params.id
    const invoice = await service.findById(id);
    res.json(invoice);
});

router.post('/:id', async (req, res) => {
    const body = req.body;
    try{
        const newInvoice = await service.create(body);
        res.status(201).json(newInvoice);
    } catch(e){
        res.status(400).json({ error });
    }
});
    

router.patch('/:id', async (req, res) =>{
    try {
        const { id } = req.params.id;
        const body = req.body;
        const invoice = await service.update(id, body);
        res.json(invoice);
    } catch (error) {
        res.status(404).json({
          message: error.message
        })
    }
})

router.delete('/:id', async (req, res) =>{
    const { id } = req.params.id;
    const respuesta = await service.delete(id);
    res.json(respuesta);
})

module.exports = router;