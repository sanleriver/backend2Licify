const Invoice = require('../models/invoince.model')

class InvoiceService {
    
    async findAll(){
        return Invoice.find();
    }

    async findById(id){
        return Invoice.findById(id);
    }

    async delete(id){
        Invoice.remove({'id': id});
        return { id };
    }

    async create(data){
        const newInvoice = new Invoice({
          id: Math.random(),
          ...data
        })
        const savedInvoice = Invoice.insertOne(newInvoice);
        return newInvoice;
      }

    async update(id, changes){
       return Invoice.updateOne({'id': id}, 
        {
            $set: changes
        });
    }
}

module.exports = InvoiceService;