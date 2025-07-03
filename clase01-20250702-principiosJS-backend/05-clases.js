class Persona{
    constructor(nombre, email, edad){
        this.nombre=nombre
        this.email=email
        this.edad=edad
        this.compras=[]
    }

    saludo(){
        console.log(`Hola, me llamo ${this.nombre}...!!!`)
    }

    comprar(producto){

        // validaciones


        this.compras.push(producto)
        console.log(`${this.nombre} ha comprado un ${producto}`)
    }

    listarComprasRealizadas(){
        console.log(`${this.compras}`)
        // return "hola"
    }

}

let persona01=new Persona("Juan", "juan@test.com", 24)
let persona02=new Persona("Carolina", "caro@test.com", 41)

console.log(persona01)
console.log(persona02)

persona02.saludo()
persona01.saludo()

persona01.comprar("TV")
persona01.comprar("PenDrive")
// console.log(persona01.listarComprasRealizadas())
persona01.listarComprasRealizadas()