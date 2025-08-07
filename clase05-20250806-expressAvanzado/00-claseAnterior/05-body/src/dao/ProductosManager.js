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
}

module.exports={ProductosManager}