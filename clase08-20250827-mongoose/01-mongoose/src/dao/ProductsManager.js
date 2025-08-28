import { productosModelo } from "./models/productsModel.js";

export class ProductsManager{

    static async getProducts(){
        return await productosModelo.find()
    }

    static async getProductBy(filtro={}){
        return await productosModelo.findOne(filtro)  // {color:"green"}
    }

    static async createProduct(product){
        return await productosModelo.create(product)
    }

    static async updateProduct(id, product){
        // return await productosModelo.updateOne({_id: id}, product)
        // return await productosModelo.findOneAndUpdate({_id:id}, product)
        return await productosModelo.findByIdAndUpdate(id, product, {new: true})
    }

    static async deleteProduct(id){
        // return await productosModelo.deleteOne({_id: id})
        return await productosModelo.findByIdAndDelete(id)
    }
}