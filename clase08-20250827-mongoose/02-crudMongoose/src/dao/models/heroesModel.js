import mongoose from "mongoose";

const heroesSchema=new mongoose.Schema(
    {
        "id": {type: Number, unique: true},
        "name": {type: String, unique: true},
        "alias": String,
        "team": String,
        "publisher": String,
    },
    {
        timestamps: true
    }
)

export const heroesModelo=mongoose.model(
    "heroes", 
    heroesSchema
)

