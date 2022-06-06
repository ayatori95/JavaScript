function jurosSimples (capital, taxJuros, temp) {
    let calculoJurosSimples = capital*(1 + temp * taxJuros)
    console.log(calculoJurosSimples)
}

function jurosComposto(capital,taxJuros, temp) {
    let calculoJurosCompostos = capital*(1 + taxJuros)**temp
    console.log (calculoJurosCompostos)
}
jurosSimples(100, 10/100, 2)
jurosComposto(100,10/100,2)