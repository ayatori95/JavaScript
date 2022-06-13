// novo recurso do ES

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade } = pessoa
console.log (nome,idade)

const {nome: n, idade: i } = pessoa
console.log(n, i)

// Acessar componentes da string dentro do objeto

const { endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)
