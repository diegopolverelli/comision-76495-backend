const operar=(a, b, funcion)=>{
    return funcion(a, b)
}

console.log(operar(3,7,(a, b)=>a+b))
console.log(operar(3,7,(a, b)=>a*b))
console.log(operar(3,7,(a, b)=>a-b))
console.log(operar(3,7,(a, b)=>a/b))