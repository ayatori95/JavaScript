const produto = new Object 
produto.nome = 'Cadeira'
produto['marca de produto'] = 'Generica'
produto.preco = 20

console.log(produto)
delete produto['marca de produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor:89000,
    proprietario: {
        nome: "Raul",
        idade: 35,
        endereço:{
            logadouro: 'Rua ABS',
            numero: 45
        }
    }
}

console.log(carro)