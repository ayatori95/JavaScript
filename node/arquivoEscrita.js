const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1944.99,
    desconto: 0.87
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err|| 'Arquivo salvo!')
})