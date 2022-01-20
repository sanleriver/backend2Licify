const joi = require('joi');

const email = joi.string().min(6).max(255).email();
const password = joi.string().min(6).max(1024)

const schemaLogin = joi.object({
    email: email.required(),
    password: password.required()
})

module.exports = schemaLogin;