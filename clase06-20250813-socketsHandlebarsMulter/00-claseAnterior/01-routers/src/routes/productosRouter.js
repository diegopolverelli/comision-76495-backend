const {Router} =require("express")
const { ProductosManager } = require("../dao/ProductosManager.js")
const { auth } = require("../middlewares/auth.js")

const router=Router()

// router.get("/", (req, res)=>{

// })
// router.post("/", (req, res)=>{

// })


router.get("/", (req, res) => {

    let { cantidad, skip } = req.query

    try {
        let productos = ProductosManager.get()
        if (cantidad) {
            // validaciones sobre cantidad... 
            cantidad = Number(cantidad)
            // NaN
            if (isNaN(cantidad) || cantidad <= 0 || cantidad > productos.length) {
                res.setHeader('Content-Type', 'application/json');
                return res.status(400).json({ error: `Si ingresa cantidad, tiene que ser un número mayor a 0 y menor a ${productos.length}` })
            }

            // validen ustedes el skip
            if (skip) {
                productos = productos.slice(Number(skip), Number(skip) + cantidad)
            } else {
                productos = productos.slice(0, cantidad)
            }
        }

        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({ productos });
    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json({ error: `Internal Server Error` })
    }
})

router.get("/:id", (req, res) => {

    // let {id}=req.params
    let id = req.params.id

    try {
        let productos = ProductosManager.get()
        let producto = productos.find(p => p.id == +id)
        if (!producto) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(404).json({ error: `No existen productos con id ${id}` })
        }

        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({ producto });
    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json({ error: `Internal Server Error` })
    }
})

router.post("/", (req, res) => {
    let { title, code, price, stock } = req.body
    // validar lo que corresponda
    if (!code || !title) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: `code y title son requeridos` })
    }

    try {
        let productos = ProductosManager.get()
        let existe = productos.find(p => p.code == code)
        if (existe) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({ error: `Ya existe un producto con code ${code} en DB` })
        }

        let nuevoProducto = ProductosManager.create({ title, code, price, stock })
        res.setHeader('Content-Type', 'application/json');
        return res.status(201).json({ payload: `Producto creado!`, nuevoProducto });
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json({ error: `Internal Server Error` })
    }

})

// CRUD 

router.put("/:id", (req, res) => {
    let { id } = req.params
    try {
        let productos = ProductosManager.get()
        let existe = productos.find(p => p.id == +id)
        if (!existe) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(404).json({ error: `No existen productos con id ${id}` })
        }

        let aModificar = req.body

        // validaciones
        if (aModificar.id) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({ error: `No se puede modificar el id` })
        }

        if (aModificar.code) {
            let existe = productos.find(p => p.code == aModificar.code && p.id != id)
            if (existe) {
                res.setHeader('Content-Type', 'application/json');
                return res.status(400).json({ error: `Ya existe otro producto con code ${aModificar.code}, con id ${existe.id}` })
            }
        }

        let productoModificado = ProductosManager.update(id, aModificar)

        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({ productoModificado });
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json({ error: `Internal Server Error` })
    }
})

router.delete(
    "/:id",
    auth,
    (req, res, next) => {
        console.log(`middleware a nivel ruta, "online"`)
        next()
    },
    (req, res) => {

        // let {id}=req.params
        let id = req.params.id

        try {
            let productos = ProductosManager.get()
            let producto = productos.find(p => p.id == +id)
            if (!producto) {
                res.setHeader('Content-Type', 'application/json');
                return res.status(404).json({ error: `No existen productos con id ${id}` })
            }

            let productoEliminado = ProductosManager.delete(id)
            res.setHeader('Content-Type', 'application/json');
            return res.status(200).json({ productoEliminado });
        } catch (error) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(500).json({ error: `Internal Server Error` })
        }
    }
)

router.get("/informe", (req, res) => {

    let ventas="ventas"
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:ventas});
})


module.exports=router