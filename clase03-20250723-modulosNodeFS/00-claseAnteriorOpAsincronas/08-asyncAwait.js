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

async function operacion2(){
    // prueba
}

// 5 x 4 + 3 x 2
const operacion=async()=>{
    let res1=await multiplica(5, 4)
    let res2=await multiplica(3, 2)
    let resFinal=await suma(res1, res2)
    // console.log(resFinal, "res. final")
    return resFinal
}

// console.log(operacion())
const app=async()=>{
    let resultado=await operacion()
    console.log(resultado)
}

app()


operacion()
    .then(r=>console.log(`Resultado operación: ${r}`))



const consultarApi=async(url)=>{
    let respuesta=await fetch(url)
    let data=await respuesta.json()
    return data
}

const controllerUsuarios=async()=>{
    let usuarios=await consultarApi("https://reqres.in/api/users?page=2")
    console.log(usuarios)
}

controllerUsuarios()