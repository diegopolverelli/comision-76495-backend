const { productos } = require("../data/productos.js");

class ProductosManager{
    static get(){
        return productos
    }

    static create(product){    // {title:"Campera", code:"pr0000adf"}
        let id=1
        if(productos.length>0){
            id=Math.max(...productos.map(d=>d.id))+1
        }

        let nuevoProducto={
            id, 
            ...product   // los ... son aquí el operador SPREAD
        }

        productos.push(nuevoProducto)

        return nuevoProducto
    }

    static update(id, product){
        let indiceProducto=productos.findIndex(p=>p.id==+id)
        if(indiceProducto==-1){
            throw new Error(`No existe producto con id ${id}`)
        }

        productos[indiceProducto]={
            ...productos[indiceProducto], 
            ...product,
            id
        }

        return productos[indiceProducto]

        // let persona={
        //     nombre:"Juan", 
        //     nombre:"Mariana",
        //     nombre:"Mariana1",
        //     nombre:"Mariana2"
        // }
    }

    static delete(id){
        let indiceProducto=productos.findIndex(p=>p.id==+id)
        if(indiceProducto==-1){
            throw new Error(`No existe producto con id ${id}`)
        }
        
        let eliminado=productos.splice(indiceProducto, 1)

        return eliminado
    }
}

module.exports={ProductosManager}