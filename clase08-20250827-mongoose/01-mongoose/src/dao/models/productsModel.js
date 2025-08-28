import mongoose from "mongoose";

export const productosModelo=mongoose.model(
    "productos", 
    new mongoose.Schema(
        {
            title: String, 
            code: {
                type: String, 
                unique: true
            }, 
            price: Number, 
            stock: {
                type: Number, 
                default: 0
            }, 
            descrip: String
        }, 
        {
            timestamps: true, 
        }
    )
)

// await productosModelo.find({title: "remera"})
// await productosModelo.insertMany([
//     {code:"abc001", title: "remera"}
// ])