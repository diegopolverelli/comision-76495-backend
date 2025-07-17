// Crear una clase llamada ProductManager que gestione un conjunto de 
// productos.
// Aspectos a Incluir:
// La clase debe crearse desde su constructor con el elemento products, 
// el cual será un arreglo vacío.

// Cada producto gestionado debe contar con las siguientes propiedades:
// - title (nombre del producto)
// - description (descripción del producto)
// - price (precio)
// - thumbnail (ruta de imagen)
// - code (código identificador)
// - stock (número de piezas disponibles)

// Métodos a Implementar
// addProduct: Este método debe agregar un producto al arreglo de productos
// inicial.
// Debe validar que no se repita el campo code y que todos los campos sean 
// obligatorios.
// Al agregar un producto, debe crearse con un id autoincrementable.

// getProducts: Este método debe devolver el arreglo con todos los 
// productos creados hasta el momento.

// getProductById: Este método debe buscar en el arreglo el producto que 
// coincida con el id.
// En caso de no encontrar ningún id coincidente, debe mostrar en consola 
// el error "Not found".

class ProductsManager{
    #products

    constructor(){
        this.#products=[]   // [{id:1, title: "campera"}, {id:2, title: "campera 2"}, {id:3, title: "zapato"}]
        // this.prueba=0
    }

    addProduct(title, price, stock, code, description){
        // validaciones
        if(!title || !price || !stock || !code || !description){
            console.log(`Todos los datos son requeridos`)
            return 
        }

        let existe=this.#products.find(p=>p.code===code)
        if(existe){
            console.log(`Ya existe un producto con code ${code}!`)
            return
        }

        // resto validaciones pertinentes
        let id=1
        if(this.#products.length>0){
            id=this.#products[this.#products.length-1].id + 1
        }

        // let id=1
        // if(this.#products.length>0){
        //     id=Math.max(...this.#products.map(d=>d.id))+1   // 1, 2, 3
        // }
        

        let nuevoProducto={
            id, 
            title, 
            price, 
            stock,
            code,  
            description
        }


        this.#products.push(nuevoProducto)
        console.log(`Producto generado con id ${id}`)
    }

    getProducts(){
        return this.#products
    }

    getProductById(id){
        let producto=this.#products.find(p=>p.id==id)
        if(!producto){
            return `No existen productos con id ${id}`
        }

        return producto        
    }
}

let productManager=new ProductsManager()
productManager.prueba=100
// console.log(productManager.prueba)
productManager.addProduct("campera", 100, 100, "001", "campera... ")
productManager.addProduct("campera 2", 100, 100, "002", "campera 2... ")
productManager.addProduct("campera 3", 100, 100, "001", "campera 3... ")
productManager.addProduct("campera 4")
productManager.addProduct("zapatos", 140, 24, "005", "zapatos... ")

console.log(productManager.getProducts())

console.log(productManager.getProductById(2))
console.log(productManager.getProductById(44))

