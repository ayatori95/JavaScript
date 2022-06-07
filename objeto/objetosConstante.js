// pessoa -> 123 -> {...}
const pessoa = {nome : 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)


//pessoa <- 456 -> {...}
//pessoa = {nome: 'Ana'}

// torna o objeto constante
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = "Rua Oswaldo"
delete pessoa.nome
console.log(pessoa)