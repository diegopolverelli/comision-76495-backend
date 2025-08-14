const express=require('express');
const fs=require("fs")

const { GoogleGenAI } =require("@google/genai");

const ai = new GoogleGenAI({apiKey:"Generar una API KEY en Gemini Developers (previo registrarse) y ponerla aquí..."});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return response.text;
}

main("quien fue Diego Armando Maradona??")
    .then((respuesta)=>{
        console.log(respuesta)
    })
    .catch(e=>console.log(`Error: ${e.message}`));

const { uploader } = require('./utils/utils.js');
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.post("/heroes", uploader.single("imagen"), (req, res)=>{

    let {nombre}=req.body
    if(!nombre){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`nombre es requerido`})
    }

    if(!req.file){
        
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Tiene que subir una imagen...!!!`})
    }

    let tipoArchivo=req.file.mimetype
    tipoArchivo=tipoArchivo.split("/")[0]
    if(tipoArchivo.toLowerCase()!="image"){

        setTimeout(() => {
            fs.unlinkSync(req.file.path)
        }, 2000);

        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Solo se admiten imagenes`})
    }


    let datosRecibidos={
        nombre, 
        archivo: req.file.originalname,
        archivoServer: req.file.filename,
        tipoArchivo: req.file.mimetype
    }

    // insertar heroe en DB, y guardar allí el path req.file.path

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({datosRecibidos});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
