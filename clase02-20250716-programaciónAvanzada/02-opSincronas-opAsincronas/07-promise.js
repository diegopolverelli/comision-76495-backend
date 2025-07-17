const suma=(a, b)=>{
    return new Promise((res, rej)=>{   // resolve / reject
        if(typeof a!="number" || typeof b!="number"){
            rej(`Solo se adminten argumentos numéricos`)
        }

        res(a+b)
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
                            .then(resFinal=>console.log(`Resultado de 5 x 5 es ${resFinal}`))
                    })
            })
    })