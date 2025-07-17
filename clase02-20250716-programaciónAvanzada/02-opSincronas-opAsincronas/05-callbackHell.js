const operar=(a, b, funcion)=>{
    return funcion(a, b)
}

// (5x4 + 2x3) / 10 +100 = 102,6
let resultado=operar(100, 0, (a, b)=>{
    return operar(10, 0, (a, b)=>{
        return operar(2, 3, (a, b)=>{
            return operar(5, 4, (a, b)=>{
                return a*b
            }) + a*b
        }) / a
    }) + a
})

console.log(resultado)
