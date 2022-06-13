function calculoBhaskara (ax2,bx, c) {
    let resultados = []
    let delta = (bx **2) - (ax2 * 4 * c)
    if (delta < 0) {
        return "Delta é negativa"
    }
    let x1 = (-bx + Math.sqrt(dalta))/(2*ax2)
    let x2 = (-bx - Math.sqrt(delta)/2*ax2)
    resultados.push(x1)
    resultados.push(x2)
    return resultados    
}

console.log(bhaskara(1,2,3))
console.log(bhaskara(4,3,2))
