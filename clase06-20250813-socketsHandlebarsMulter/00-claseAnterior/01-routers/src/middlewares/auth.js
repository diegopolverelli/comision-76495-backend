const auth=(req, res, next)=>{
    let {password}=req.query

    if(password!="123"){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Necesita password para eliminar un producto`})
    }

    next()
}

module.exports={auth}