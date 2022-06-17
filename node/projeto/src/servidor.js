const porta = 3003

const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParse.urlencoded({extended:true}))

app.get('/produtos', (req, res,next) => { // caso utilizar use no lugar de get, qualquer url irá responder a requisição
    res.send(bancoDeDados.getProdutos()) //Converte para JSON
})

app.get('/produtos/:id', (req,res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})


app.listen(porta, () =>{
    console.log(`Servidor execultando na porta ${porta}`)
})