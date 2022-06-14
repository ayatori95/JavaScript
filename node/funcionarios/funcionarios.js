const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require ('axios')

axios.get(url).then(response => {
    const mulheres = response.data.filter(genero => (genero.genero === 'F') )
    const china = mulheres.filter(pais => (pais.pais === 'China'))
    const menorSalario = china.reduce((func, funAtual) => {
        return func.salario < funAtual.salario ? func : funAtual
    })
    console.log(menorSalario)
})