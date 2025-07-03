console.log(100, typeof 100)
console.log("Pedro", typeof "Pedro")
console.log(false, typeof false)
console.log([1,2,4,true, "Maria"], typeof [1,2,4,true, "Maria"])

let nombre='Martin'
console.log(nombre, typeof nombre)

let persona={
    name:"Matilde", 
    edad: 28,
    lastName: "Roldan",
    email: "mati@test.com"
}
console.log(persona, typeof persona)

let datos=[1,2,3]
console.log(Array.isArray(datos))
let datos1=900
console.log(Array.isArray(datos1))

let propiedades=Object.keys(persona)
console.log(propiedades)
let valores=Object.values(persona)
console.log(valores)
