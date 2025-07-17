// includes
let nombres=["Juan", "Mariana", "Carlos", "Sabrina", "Veronica"]
if(nombres.includes("Carlos")){
    console.log(`Carlos existe`)
}else{
    console.log(`Carlos no existe`)
}

if(nombres.includes("Pedro")){
    console.log(`Pedro existe`)
}else{
    console.log(`Pedro no existe`)
}


// operador potencia
console.log(Math.pow(3, 2))
console.log(3**2)



// métodos Object
let usuarios=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
]
let usuario01=usuarios[0]
console.log(Object.keys(usuario01))

let propiedadesValidas=Object.keys(usuario01)

let newUser={nombre:"Matilde", edad:23}
let propsNewUser=Object.keys(newUser)
let error=false
propsNewUser.forEach(p=>{
    if(!propiedadesValidas.includes(p)){
        error=true
    }
})
if(error){
    console.log(`usuario con propiedaes inválidas`)
}

console.log(Object.values(usuario01))
console.log(Object.entries(usuario01))

// Array.isArray([1, 2, 3])




// operador spread / operador rest
let usuarioRequest={nombre: "Diana", apellido: "Rojas", email: "drojas@test.com", edad:29}
let idAsignado=100
let nuevoUsuario={
    idAsignado, 
    // nombre: usuarioRequest.nombre, 
    // apellido: usuarioRequest.apellido
    ...usuarioRequest
}

console.log(nuevoUsuario)



let numeros1=[1,2,3,4]
let numeros2=[5,6,7,8]
let todosLosNumeros=[...numeros1, ...numeros2]
console.log(todosLosNumeros)

const suma4=(a, b, c, d)=>{
    return a +b +c +d
}

console.log(suma4(3,3,3,3))
console.log(suma4(...numeros2))
console.log(suma4(...numeros1))



// operador nulish ??
let temperatura=0
// let sensor= temperatura || "no se pudo leer la data"
let sensor= temperatura ?? "no se pudo leer la data"
console.log(`La temperatura es de ${sensor}`)



// array.flat()
let arrayAnidado=[1,2,3,[4,5,6],7,8,[9],10,11,12]



arrayAnidado=[1,2,3,[4,5,6],7,8,[9,[10,11,12],13,14,[15,[16,17,18]]],19,20]
console.log(arrayAnidado.flat())
console.log(arrayAnidado.flat(5))







