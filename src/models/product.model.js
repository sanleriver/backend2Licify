const {Schema,model }= require('mongoose');

const productSchema = new Schema({
    id: String,
    name: String,
    value: Number,
    iva: Number
 });

 module.exports=model('Prodct',productSchema);