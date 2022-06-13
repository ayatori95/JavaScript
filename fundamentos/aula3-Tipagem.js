let qualquer = 'Legal'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.5095409

console.log(qualquer)
console.log(typeof qualquer)

// Evitar nomes genéricos e siglas

let valor = ''
let numero = 1
let pqp = false // Produto Químico Perigoso

const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.756
const avaliacao2 = 6.989

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // em binário