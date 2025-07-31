const express=require("express")
const {UsersManager} =require("./dao/UsersManager.js")

const PORT=3000
const app=express()
UsersManager.rutaDatos="./src/data/usuarios.json"

app.get("/", (req, res)=>{


    res.send("Bienvenidos al server...!!!")
})

app.get("/productos", (req, res)=>{


    res.send("Productos...!!!")
})

app.get("/contacto", (req, res)=>{


    res.send("Contact Page...!!!")
})

app.get("/usuarios", async(req, res)=>{
    let usuarios=await UsersManager.getUsers()

    res.send(usuarios)
})

app.listen(PORT, ()=>{
    console.log(`Server on line en pueto ${PORT}`)
})