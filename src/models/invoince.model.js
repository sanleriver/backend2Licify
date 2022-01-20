const joi = require('joi');

const {Schema,model }= require('mongoose');
const product = require('./product.model');

const invoinceSchema = new Schema({
    id: joi.string().uuid().required(),
    totalValue: joi.number.min(1000).required(),
    totalIva: joi.number.min(1000).required(),
    items: product.required(),
    pagada: joi.boolean().required()
 });

 module.exports=model('Invoice',invoinceSchema);