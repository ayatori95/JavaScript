const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const moduleSaudacao =  require('saudacao')
console.log(moduleSaudacao.ola)

const http = require ('http')
http.createServer((req, res)=> {
    res.write('Bom dia!')
    res.end()
}).listen(8080)