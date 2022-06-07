const a = 1
const b = 2
const c = 3

const objt1 = {a:a,b:b,c:c}
const objt2 = {a,b,c}
console.log(objt1, objt2)

const nomeAttr = "Nota"
const valorAttr = 7.84

const objt3 = {}
objt3[nomeAttr] = valorAttr
console.log (objt3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const objt5 = {
    funcao1: function() {

    },
    funcao2: function() {
        
    }
}