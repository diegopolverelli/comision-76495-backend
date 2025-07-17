const suma=(a, b)=>{
    return new Promise((res, rej)=>{   // resolve / reject
        if(typeof a!="number" || typeof b!="number"){
            rej(`Solo se adminten argumentos numéricos`)
        }

        res(a+b)
    })
}

// console.log(suma(8,4))
suma(8, 4)
    .then(res=>{
        console.log(`Resultado es ${res}`)
    })
    .catch(e=>{
        console.log(e)
    })
    .finally(()=>{
        console.log(`Esto ejecuta siempre..!!!`)
    })

// fetch().then()

suma(8, "Pedro")
    .then(res=>{
        console.log(`Resultado es ${res}`)
    })
    .catch(e=>{
        console.log(e)
    })
    .finally(()=>{
        console.log(`Esto ejecuta siempre..!!!`)
    })
