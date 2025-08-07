const express=require('express');
const { ProductosManager } = require('./dao/ProductosManager.js');
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{

    console.log(req.url)
    console.log(req.headers)

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/api/productos", (req, res)=>{

    let {cantidad, skip}=req.query
    
    try {
        let productos=ProductosManager.get()
        if(cantidad){
            // validaciones sobre cantidad... 
            cantidad=Number(cantidad)
            // NaN
            if(isNaN(cantidad) || cantidad<=0 || cantidad>productos.length){
                res.setHeader('Content-Type','application/json');
                return res.status(400).json({error:`Si ingresa cantidad, tiene que ser un número mayor a 0 y menor a ${productos.length}`})
            }

            // validen ustedes el skip
            if(skip){
                productos=productos.slice(Number(skip), Number(skip)+cantidad)
            }else{
                productos=productos.slice(0, cantidad)
            }
        }

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({productos});
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal Server Error`})
    }
})

app.get("/api/productos/:id", (req, res)=>{

    // let {id}=req.params
    let id=req.params.id

    try {
        let productos=ProductosManager.get()         
        let producto=productos.find(p=>p.id==+id)
        if(!producto){
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error:`No existen productos con id ${id}`})
        }

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({producto});        
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal Server Error`})
    }
})

app.post("/api/productos", (req, res)=>{
    let {title, code, price, stock}=req.body
    // validar lo que corresponda
    if(!code || !title){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`code y title son requeridos`})
    }
    
    try {
        let productos=ProductosManager.get()
        let existe=productos.find(p=>p.code==code)
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ya existe un producto con code ${code} en DB`})
        }
        
        let nuevoProducto=ProductosManager.create({title, code, price, stock})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({payload:`Producto creado!`, nuevoProducto});
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal Server Error`})
    }

})

// CRUD 

app.put("/api/productos/:id", (req, res)=>{
    let {id}=req.params
    try {
        let productos=ProductosManager.get()         
        let existe=productos.find(p=>p.id==+id)
        if(!existe){
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error:`No existen productos con id ${id}`})
        }

        let aModificar=req.body

        // validaciones
        if(aModificar.id){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No se puede modificar el id`})
        }

        if(aModificar.code){
            let existe=productos.find(p=>p.code==aModificar.code && p.id!=id )
            if (existe){
                res.setHeader('Content-Type','application/json');
                return res.status(400).json({error:`Ya existe otro producto con code ${aModificar.code}, con id ${existe.id}`})
            }
        }

        let productoModificado=ProductosManager.update(id, aModificar)

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({productoModificado});        
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal Server Error`})
    }
})

app.delete("/api/productos/:id", (req, res)=>{

    // let {id}=req.params
    let id=req.params.id

    try {
        let productos=ProductosManager.get()         
        let producto=productos.find(p=>p.id==+id)
        if(!producto){
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error:`No existen productos con id ${id}`})
        }

        let productoEliminado=ProductosManager.delete(id)
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({productoEliminado});        
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal Server Error`})
    }
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
