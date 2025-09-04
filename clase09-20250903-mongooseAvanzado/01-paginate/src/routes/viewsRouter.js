import { Router } from 'express';
import { UsuariosManager } from '../dao/UsuariosManager.js';
export const router=Router()

router.get('/usuarios',async(req,res)=>{
    try {
        // let respuesta=await UsuariosManager.getUsuarios()
        // let usuarios=respuesta.docs

        let {limit, page}=req.query

        let {docs: usuarios, totalPages, hasPrevPage, hasNextPage, prevPage, nextPage}=await UsuariosManager.getUsuarios(limit, page)

        console.log(usuarios, )
        // console.log(usuarios[0])

        // console.log(Object.keys(usuarios[0].toJSON()))
        
        res.render("usuarios", {
            usuarios, 
            totalPages, hasPrevPage, hasNextPage, prevPage, nextPage
        })
    } catch (error) {
        console.log(error)

        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal server error`})
    }
})