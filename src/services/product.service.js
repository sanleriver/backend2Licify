const Product = require('../models/product.model')

class ProductService {
    
    async findAll(){
        return Product.find();
    }

    async findById(id){
        return Product.findById(id);
    }
}

module.exports = ProductService;