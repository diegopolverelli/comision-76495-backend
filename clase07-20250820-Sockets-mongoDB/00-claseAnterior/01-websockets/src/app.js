const express=require("express")
const {Server} =require("socket.io")
const {engine} =require("express-handlebars")

const vistasRouter=require("./routes/viewsRouter.js")
const heroesRouter=require("./routes/heroesRouter.js")

const PORT=3000;

const app=express();

app.engine("hbs", engine({extname:"hbs"}))
app.set("view engine", "hbs")
app.set("views", "./src/views")


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

// app.use('/api/heroes', heroesRouter)
app.use(
    '/api/heroes', 
    (req, res, next)=>{

        req.socket=serverSocket
        next()

    },
    heroesRouter
)
app.use("/", vistasRouter)

app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/oferta", (req, res)=>{

    let {oferta}=req.query
    if(!oferta){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese oferta...!!!!`})
    }

    serverSocket.emit("oferta", oferta)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Oferta enviada!"});
})

const serverHTTP=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

const serverSocket=new Server(serverHTTP)              // io

serverSocket.on("connection", socket=>{
    console.log(`Se ha conectado un cliente con id ${socket.id}`)
    socket.emit("saludo", `Bienvenido! Identificate`)

    socket.on("nombre", dato=>{
        console.log(`El cliente con id ${socket.id} se ha identificado como ${dato}`)

        let nombre=dato

        socket.broadcast.emit("nuevoUsuario", nombre)
    })

    socket.on("mensaje", (nombre, mensaje)=>{
        serverSocket.emit("nuevoMensaje", nombre, mensaje)
    })

})

setInterval(() => {
    let hora=new Date().toISOString()
    console.log(hora)
    serverSocket.emit("hora", hora)
}, 1000);

