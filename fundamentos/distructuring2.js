// usando a destruturação com objeto pela função randomica

function rand({ min=0, max=1000}) {
    const valor= Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand({}))

// usando a destruturação com arreys pela função randomica

function rands([min = 0, max = 1000]) {
    if (min>max) [min,max] = [max,min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rands([50, 40]))
console.log(rands([992]))