const express = require("express")
const router=express.Router()

router.get('/:id',(req,res)=>{
    console.log('working as it should')
    res.send('something')
})

module.exports=router