const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    let title = 'Login | Painel Administrativo'
    res.render('admin/login.ejs', {title: title})
})


router.get('/admin', (req, res) => {
    res.send('Área Restrita..')
})

module.exports = router;