const { Router } = require('express');
const router = Router();
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const schemaLogin = require('../dtos/user-login.dto')

// Libreria para el cifrado de contraseñas
const bcrypt = require('bcryptjs');

// Metodo POST para el Logueo
router.post('/login', async (req, res) => {
    // validaciones
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })
    
    const token = jwt.sign({
        name: user.name,
        id: user._id,
        role: user.role,
        permission: user.permissionLevel,
        expiresIn: 1440
    }, 'licify')
    
    res.header('auth-token', token).json({
        error: null,
        data: {token}
    })
})

module.exports = router;