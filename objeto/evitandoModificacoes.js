// Objeto.preventExtensions
const produto = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99, tag :'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descrição = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {nome: 'Afonso', idade: 34}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valostes constantes 

const carro = { nome: "Fox", marca: 'Hyundai'}
Object.freeze(carro)
console.log('Freeze:', Object.isFrozen(carro))

carro.sobrenome = "Cross"
delete carro.marca
pessoa.nome = "HB20"
console.log(carro)