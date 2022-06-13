function criarProduto (nome,preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Geladeria',1000.00))
console.log(criarProduto('Fogão',2000.00))