console.log(soma(3,4))

/* function declaration, nela a função pode ser chamada 'antes' de ser declarada,
 pois o browser carrega todas essas funções antes de carregar a página */
function soma (x,y) {
    return x + y
}

// funtion expression
const sub = function (x,y) {
    return x - y 
}

console.log(sub(3,4))

//named function expression
const mult = function mult (x,y) {
    return x * y
}

console.log(mult(3,4))