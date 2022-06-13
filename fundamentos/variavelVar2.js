// Exemplo variaveis globais
var numero = 1
{{
    var numero = 2
    console.log('Dentro =', numero)
}}

console.log ('Fora = ', numero)

// loop com var

for (var i = 0; i < 10; i ++) {
    console.log (i)
}

// loop com var usando funcao

const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2] ()
funcs[5] ()