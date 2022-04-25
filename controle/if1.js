function soBoaNoticia(nota){
    if (nota >= 7){
     console.log ('Aprovado com ' + nota)
    } else{
        console.log ('Reprovado com' + nota)
    }
}

soBoaNoticia(8)

// Idenfica se foi preenchido o espaço
function seForVerdadeEuFalo(espaço){
    if(espaço){
        console.log('É verdade que ...' + espaço)
    }
}

seForVerdadeEuFalo ('')
seForVerdadeEuFalo (null)
seForVerdadeEuFalo (undefined)
seForVerdadeEuFalo (NaN)
seForVerdadeEuFalo (' ')