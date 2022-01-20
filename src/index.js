require ('dotenv').config();

const express = require('express');
const app = express();
require('./database');
const validateToken = require('./middlewares/validate-token.middleware');
const port = 3000;

const cors = require('cors');
var corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // 
}
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
//CREACIÓN DEL MIDLEWARE
app.use(express.json());


//app.use('/api/user',validateToken,require('./routes/routes.user'));
app.use('/api/auth',require('./routes/routes.login'));
//app.use('/api/externa',validateToken,require('./routes/routes.apiexterna'));

app.listen(port, function () {
    console.log('app listening at port %s',port);
});