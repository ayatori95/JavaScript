var numero = 1
{
    let numero = 2
    console.log('dentro=', numero)
}
console.log ('fora =', numero)


// loop com Let

for (let i = 0; i< 10; i++){
    console.log(i)
}

// loop com let funcao

const funcs = []

for (let i = 0; i < 10; i ++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[6]()