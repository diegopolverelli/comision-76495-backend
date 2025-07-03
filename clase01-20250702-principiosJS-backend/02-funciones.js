
function suma(a, b){
    if(typeof a!="number" || typeof b!="number"){
        throw new Error("solo se admiten argumentos numéricos")
    }
    // operación

    return a+b
}

let resultado=suma(2,4)
console.log(resultado)
resultado=suma(20,4)

// suma="sumo 2 valores..."

console.log(resultado)

resultado=suma(-2,4)
console.log(resultado)
// resultado=suma("Juan","Pedro")
// console.log(resultado)

const suma1=function(a, b){
    if(typeof a!="number" || typeof b!="number"){
        throw new Error("solo se admiten argumentos numéricos")
    }
    // operación

    return a+b
}

// suma1="Juan"

resultado=suma1(8, 10)
console.log(resultado)

const sumaFlecha=(a, b)=>{
    let dato01="hola"
    console.log(dato01)
    
    dato01="chau"
    console.log(dato01)
    for(let i=0; i<10; i++){
        let dato02="dato"
        console.log(resultado, dato01)
    }
    // console.log(dato02)
    return a+b
}

console.log(sumaFlecha(10,10))

const sumaFlecha2=(a, b)=>a+b
console.log(sumaFlecha2(4,3))

const cuadrado=a=>a*a

console.log(cuadrado(9))

// console.log(datos1)

