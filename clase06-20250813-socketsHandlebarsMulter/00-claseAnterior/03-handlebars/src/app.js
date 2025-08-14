const express=require('express');
const {engine} =require("express-handlebars")
const villanosRouter=require("./routes/villanos.router.js")
const productosRouter=require("./routes/productosRouter.js")
const viewsRouter=require("./routes/viewsRouter.js")
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

// c:\mis documentos\prueba\proyecto01   // absoluta

app.use(express.static("./src/public"))
app.use("/api/villanos", villanosRouter)
app.use("/api/productos", productosRouter)
app.use("/", viewsRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
