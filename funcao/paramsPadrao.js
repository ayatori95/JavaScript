function soma1(a, b, c) {
    a = a || 1
    b = b || 2
    c = c || 3
    return a + b + c
}

console.log(soma1(), soma1(2))

// estrategia 2, 3 , 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 2
    c = isNaN(c) ? 3 : c
    return a + b + c
}

console.log(soma2(3,5,0))

// valor padrão mais recente
 function soma3 (a = 1, b = 1, c = 1) {
     return a + b + c
 }

 console.log(soma3(9,4,0), soma3(0,0,0))