const mongoose = require('mongoose');

//mongodb+srv://licify:<password>@invoice-manager.soddp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const uri = `mongodb+srv://licify:<password>@invoice-manager.soddp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))