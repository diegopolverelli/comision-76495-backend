import express from 'express';
import mongoose from "mongoose"
import { conectarDB } from './config/db.js';
import { config } from './config/config.js';
import { router as productsRouter } from './routes/productsRouter.js';
const PORT=config.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.use("/api/products", productsRouter)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

// await mongoose.connect("mongodb+srv://coder:codercoder@cluster0.olj5ktk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=clase08comis76495")

conectarDB(
    config.MONGO_URL,
    config.DB_NAME
)
