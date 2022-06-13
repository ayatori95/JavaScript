const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3)) // informa o código na tabela unicode
console.log(escola.indexOf('3')) // procura o numero 3 e informa a colocação na const

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e'))

console.log('Ana, Maria, Pedro'.split(',')) // cria um array pegando com base a vírgula