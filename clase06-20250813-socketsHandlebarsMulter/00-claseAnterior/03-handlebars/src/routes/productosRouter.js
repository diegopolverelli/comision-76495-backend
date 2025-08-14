const Router=require('express').Router;
const router=Router()

router.post('/',(req,res)=>{

    let {title, price}=req.body
    if(!title || !price){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`title y price son require...!!!`})
    }

    // logica de alta de producto

    // res.setHeader('Content-Type','application/json')
    // res.status(200).json({
    //     recibido:{
    //         title, price
    //     }
    // })
    console.log(req.body)
    res.redirect("/?mensaje=Producto creado...!!!")
})


module.exports=router