const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Setando as configurações do body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// Setando as configurações do EJS
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req,res) => {
    let title = 'Blog | Página Inicial'
    res.render('index.ejs', {title: title})
})
app.get('/diversos/post', (req, res) => {
    let title = 'Post Example | Página Inicial'
    res.render('post.ejs', {title: title})
})
app.get('/login', (req, res) => {
    let title = 'Login | Painel Administrativo'
    res.render('admin/login.ejs', {title: title})
})


app.listen(80, () => {
    console.log('Servidor Rodando ...')
})