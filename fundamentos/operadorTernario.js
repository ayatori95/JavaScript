function resultado1 (nota){
   const res = nota >= 7 ? 'Aprovado' : 'Reprovado'
   return res
}

console.log(resultado1(7))

// Duas formas de escrever o mesmo código

const resultado2 = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado2(5.9))