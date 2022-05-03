const fabricantes = ["Mercedes", "Audi", "BWw"]

function imprimir(nome,indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)