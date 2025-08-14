// const Router=require('express').Router;
const {Router}=require("express")
// const express=require("express")
// const router=express.Router()
const router=Router()

router.get('/',(req,res)=>{

    // logica de get...
    let pets="listado de pets"    

    res.setHeader('Content-Type','application/json')
    res.status(200).json({pets})
})

router.post('/',(req,res)=>{

    // logica de get...
    let pet="nueva mascota creada"    

    res.setHeader('Content-Type','application/json')
    res.status(200).json({pet})
})

// resto del crud


module.exports=router