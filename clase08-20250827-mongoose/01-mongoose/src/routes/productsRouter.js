import { Router } from 'express';
import { ProductsManager } from '../dao/ProductsManager.js';
export const router=Router()

router.get('/',async(req,res)=>{

    try {
        // let productos="productos"
        let productos=await ProductsManager.getProducts()
    
        res.setHeader('Content-Type','application/json')
        res.status(200).json({productos})
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`internal server error`})
    }
})

router.get("/:id", async(req, res)=>{
    let id=req.params.id

    try {
        let producto=await ProductsManager.getProductBy({_id:id})
        if(!producto){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existe producto con id ${id}`})
        }
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({producto});
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`internal server error`})
    }
})

router.post("/", async(req, res)=>{
    let {title, code, descrip, price, stock} = req.body
    //validaciones pertinentes
    if(!code || !title || !descrip || !price){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Faltan datos`})
    }

    // resto validaciones... (unique...!!!)
    
    try {
        let existe = await ProductsManager.getProductBy({code})
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ya existe un producto con code ${code} en db: ${existe.title}`})
        }

        let nuevoProducto=await ProductsManager.createProduct({title, code, descrip, price, stock})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({message:"Alta producto exitosa", nuevoProducto});
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`internal server error`})        
    }

})

router.put("/:id", async(req, res)=>{
    let {id}=req.params
    // validaciones en relación a lo que voy a modificar
    let modifica=req.body

    try {
        let productoModificado=await ProductsManager.updateProduct(id, modifica)
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({message:`Modificación exitosa`, productoModificado});
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`internal server error`})
    }
})

router.delete("/:id", async(req, res)=>{
    let id=req.params.id

    try {
        let productoEliminado=await ProductsManager.deleteProduct(id)
        if(!productoEliminado){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existe producto con id ${id}`})
        }
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:productoEliminado});
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`internal server error`})
    }
})