const { productos } = require("../data/productos.js");

class ProductosManager{
    static get(){
        return productos
    }
}

module.exports={ProductosManager}