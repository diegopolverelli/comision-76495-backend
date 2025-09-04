import { Router } from 'express';
import { UsuariosManager } from '../dao/UsuariosManager.js';
export const router=Router()

router.get('/',async(req,res)=>{
    let {limit, page}=req.query

    try {
        let data=await UsuariosManager.getUsuarios(limit, page)
        
        res.setHeader('Content-Type','application/json')
        res.status(200).json(data)
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Internal Server Error`})
    }
})