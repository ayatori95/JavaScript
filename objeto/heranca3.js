const pai= { nome: "Pedro", corCabelo: "preto"}

const filho1 = Object.create(pai) // declara coorelação de herança pai e filho 
filho1.nome = 'Ana'
console.log(filho1.corCabelo)

const filho2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable:true} // impede que nome de filho2 seja reescrito
})

console.log(filho2.nome)
filho2.nome = 'Carlos'
console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`) // faz o teste de reescrever

for (let key in filho2) {
    filho2.hasOwnProperty(key) ?
        console.log(key) : console.log (`Por herança : ${key}`) // saber se a propriedade veio do próprio objeto ou se veio por herança 
}