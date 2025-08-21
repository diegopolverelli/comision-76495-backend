const { HeroesManager } = require('../dao/HeroesManager.js');

const Router=require('express').Router;
const router=Router()

const heroesManager=new HeroesManager()

router.get('/heroes',(req,res)=>{
    let heroes=heroesManager.getAll()
    console.log(heroes)

    res.render("heroes", {heroes})
})

router.get('/realtimeHeroes',(req,res)=>{
    let heroes=heroesManager.getAll()
    console.log(heroes)

    res.render("realtimeHeroes", {heroes})
})


module.exports=router