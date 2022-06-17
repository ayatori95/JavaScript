const passo1 = (ctx,next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx,next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valo3='mid3'

const exec = (ctx, ...middlewares) => {
    const execPassos = indice => {
        middlewares && indice < middlewares.length && 
            middlewares[indice](ctx, () => execPassos (indice + 1))
    }
    execPassos(0)
}

const ctx = {}
exec(ctx, passo2,passo1, passo3)
console.log(ctx)