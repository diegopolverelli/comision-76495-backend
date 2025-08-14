const logger=(req, res, next)=>{
    console.log(`Fecha: ${new Date().toLocaleDateString()} - Petición a url: ${req.url} | metodo: ${req.method}`)

    next()
}

module.exports={logger}

