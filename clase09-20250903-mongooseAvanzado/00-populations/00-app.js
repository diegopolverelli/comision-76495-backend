import mongoose from "mongoose";
// const mongoose=require("mongoose")

try {
    await mongoose.connect(
        "mongodb+srv://coder:codercoder@cluster0.olj5ktk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
             dbName: "comisPruebas"
        }
    )
    console.log(`DB online!`)
} catch (error) {
    console.log(`Error al conectarse... :( - ${error.message} `)
    process.exit()
}

const cursosModelo=mongoose.model(
    "cursos", 
    new mongoose.Schema(
        {
            nombre: String, 
            horas: Number, 
            docente: String
        },
        {
            timestamps: true,
            // strict: false, 
            // collection: "cursos2021"
        }
    )
)

const alumnoEsquema=new mongoose.Schema(    // cart del e-commerce
    {
        legajo: {
            type: String, 
            unique: true
        }, 
        nombre: String, 
        email: String, 
        cursando:{
            type: [
                {
                    curso: {    // product del e-commerce
                        type: mongoose.Types.ObjectId,
                        ref: "cursos"
                    }, 
                    nota: Number   // quantity del e-commerce
                }
            ]
        }, 
        // pais: {
        //     type: mongoose.Types.ObjectId,
        //     ref: "paises"
        // },
    },
    {
        timestamps: true
    }
)

const alumnosModelo=mongoose.model(
    "alumnos", 
    alumnoEsquema
)

// await cursosModelo.deleteMany({})
// await alumnosModelo.deleteMany({})

// let curso01=await cursosModelo.create({
//     nombre: "Matemática Discreta II", 
//     horas: 8, 
//     docente: "Juan Lopez", 
//     // dias: "lunes y viernes"
// })

// let curso02=await cursosModelo.create({
//     nombre: "Calculo I", 
//     horas: 12, 
//     docente: "Mariana Aguirre",   
// })

// let alumno01=await alumnosModelo.create({
//     legajo: "00007", 
//     nombre: "Carolina Martinez", 
//     email: "caro2018@test.com", 
//     cursando: [
//         {
//             curso: curso01._id, 
//             nota: 7
//         }, 
//         {
//             curso: curso02._id,
//             nota: 6
//         },
//     ]
// })

// console.log(curso01)
// console.log(curso02)
// console.log(alumno01)

let alumno01=await alumnosModelo.find()
console.log(JSON.stringify(alumno01, null, 5))

// alumno01=await alumnosModelo.find().populate("cursando.curso")  // "products.product"
alumno01=await alumnosModelo.find().populate({
    path: "cursando.curso",
    // populate: {
    //     path: "docente"
    // }
})  // "products.product"
console.log(JSON.stringify(alumno01, null, 5))

alumno01=await alumnosModelo
                .find()
                .populate("cursando.curso")
                // .populate("pais")
                                    // .populate({
                                        //     path: "aprobadas.curso", 
                                        //     populate: {
                                    //         path: "docente"
                                    //     }
                                    // })

console.log(JSON.stringify(alumno01, null, 5))