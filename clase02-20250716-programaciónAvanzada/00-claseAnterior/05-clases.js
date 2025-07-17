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


class Producto{
    static cantidadProductos=0
    static origen="Arg"

    #price

    constructor(title, price, stock=0){
        this.title=title
        this.#price=price
        this.stock=stock
        Producto.cantidadProductos++
    }

    getPrice(){
        return this.#price
    }

    cambiarPrecio(precio){
        if(precio<=0){
            console.log(`No se admiten precios en 0 o negativos`)
            return 
        }
        this.#price=precio
    }

    static getOrigen(){
        return this.origen
    }

}

let producto01=new Producto("Remera", 100, 5)
let producto02=new Producto("Pantalon", 140, 4)


console.log(`Cantidad de productos definidos: ${Producto.cantidadProductos}`)
console.log(`Los productos son de origen ${Producto.getOrigen()}`)

console.log(producto01.getPrice())
producto01.cambiarPrecio(120)
console.log(producto01.getPrice())
producto01.cambiarPrecio(-40)
console.log(producto01.getPrice())

