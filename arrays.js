const lista = [7.7, 8.9, 6.9, 9.2]
console.log(lista)

lista [4] = 10
console.log(lista)
console.log(lista.length)

lista.push({id:3}, false, null, 'test')
console.log(lista)

// formas de retirar componentes de arrays
console.log(lista.pop())
delete lista [0]
console.log(lista)

console.log(typeof lista) //arrays são objetos