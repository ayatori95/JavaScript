// tentativa de transformar o objeto em arquivo JSON
// const fs = require('fs');

const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4666.33

console.log (prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.99
}

console.log (prod2)

// function produto (prod2){
//    fs.writeFile('produtoEscolhido.json', JSON.stringify(prod2, null,2), function(err){
//        if (err) console.log(err)
//    })
//} 