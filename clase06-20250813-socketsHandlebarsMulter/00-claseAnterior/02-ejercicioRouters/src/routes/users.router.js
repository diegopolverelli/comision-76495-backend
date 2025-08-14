const {Router} = require("express");
const UsersManager = require("../dao/UsersManager.js");

const router=Router()

router.get("/", async(req, res)=>{
    try {
        let users=await UsersManager.getUsers()
    
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({users});
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`internal server error`})
    }
})

router.get("/:id", (req, res)=>{
    let usuario=`Usuario ${req.params.id}`

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({usuario});
})

router.post("/", (req, res)=>{
    let nuevoUsuario="nuevo usuario"

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nuevoUsuario});
})

module.exports=router