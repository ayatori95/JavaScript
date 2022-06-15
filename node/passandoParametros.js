// exporta uma função que escreve boa semana para a lista de nomes recebidos
module.exports = function (...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`)
}