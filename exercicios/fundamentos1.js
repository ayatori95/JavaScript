function transformacaoValorDecimal (valorDecimal) {
   let valoremReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".",",")}`
   console.log(valoremReais)
}

transformacaoValorDecimal (0.1 + 0.2)