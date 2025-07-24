const suma=(a, b)=>{
    return new Promise((res, rej)=>{   // resolve / reject
        if(typeof a!="number" || typeof b!="number"){
            rej(`Solo se adminten argumentos numéricos`)
        }

        res(a+b)
    })
}

const multiplica=(a, b)=>{
    return new Promise((res, rej)=>{   // resolve / reject
        if(typeof a!="number" || typeof b!="number"){
            rej(`Solo se adminten argumentos numéricos`)
        }

        res(a*b)
    })
}

// 5 x 5
suma(5, 5)
    .then(res1=>{
        suma(res1, 5)
            .then(res2=>{
                suma(res2, 5)
                    .then(res3=>{
                        suma(res3, 5)
                            .then(resFinal=>console.log(`Resultado de 5 x 5 es ${resFinal}; promises Hell`))
                    })
            })
    })

suma(5, 5)
    .then(res1=>{
        // throw new Error("Paso algo...")
        return suma(res1, 5)
    })
    .then(res1=>{
        return suma(res1, 5)
    })    
    .then(res1=>{
        return suma(res1, 5)
    })
    .then(resFinal=>console.log(`Resultado 5 x 5: ${resFinal} con encadenamiento promesas`))
    .catch(e=>console.log("Error"))


// 5 x 4 + 3 x 2
let auxiliar1
multiplica(5, 4)
    .then(res1=>{
        auxiliar1=res1
        return multiplica(3, 2)
        // return "Juan Carlos"
    })
    .then(res2=>{
        return suma(auxiliar1, res2)
    })
    .then(resFinal=>console.log(`Resultado operación: ${resFinal}`))