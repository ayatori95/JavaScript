// usando a notação literal
const obj1 = {}
console.log(obj1)

// object em JS
const obj2 = new Object
console.log(obj2)

// Funções Construtoras
function Produto (nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }
}

const p1 = new Produto ('Caneta',7.99,0.15)
console.log(p1.getPrecoComDesconto())