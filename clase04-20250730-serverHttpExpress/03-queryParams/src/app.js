const express=require('express');
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{


    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/datos',(req,res)=>{

    console.log(req.query)

    res.setHeader('Content-Type','application/json');
    res.status(200).send({message:"hola", numero:100, datosGetParams: req.query});
})

app.get('/close',(req,res)=>{

    setTimeout(() => {
        console.log(`Server cerrando...`)
        server.closeAllConnections()
        server.close()
    }, 2000);

    res.setHeader('Content-Type','application/json');
    res.status(200).send({message:"El server se apagará!!!"});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

