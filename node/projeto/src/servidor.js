const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res,next) => { // caso utilizar use no lugar de get, qualquer url irá responder a requisição
    res.send({nome:'Notebook', preco:1345.45}) //Converte para JSON
})

app.listen(porta, () =>{
    console.log(`Servidor execultando na porta ${porta}`)
})