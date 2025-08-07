const express=require('express');
const { ProductosManager } = require('./dao/ProductosManager.js');
const PORT=3000;

const app=express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{

    console.log(req.query)

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

app.get("/datos/:nombre/:apellido", (req, res)=>{
    let {apellido, nombre}=req.params

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({apellido, nombre});
})

app.get("/datos/:nombre/correo/:email", (req, res)=>{

    let {email, nombre}=req.params
    let reLargo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    if(!reLargo.test(email)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Email formato invalido...!!!`})
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({email, nombre});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
