let numeros=[1,2,3,4,5]

function cuadrado(a){
    return a**2
}
console.log(numeros.map(e=>e**2))
console.log(numeros.map(cuadrado))


const miMap=(array, funcion)=>{
    let resultado=[]
    for(let i=0; i<array.length; i++){
        let auxiliar01=funcion(array[i])
        resultado.push(auxiliar01)
    }

    return resultado
}

console.log(miMap(numeros, cuadrado))
console.log(miMap(numeros, n=>n**2))