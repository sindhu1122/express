const express = require('express');
 const router= express.Router()
const memers=require('../../memers')
const uuid=require('uuid')

// //Get all memres
 router.get('/',(req,res)=>res.json(memers));


// //Get single memer based on id
 router.get('/:id',(req,res)=>
{
    const found=memers.some(memer=>memer.id==req.params.id)
    if(found)
        res.json(memers.filter(memer=>memer.id==req.params.id))
    else
    res.status(404).json({msg:`Memer wth id ${req.params.id} `})
})

//Create Memer
router.post('/',(req,res)=>
{
    //res.send(req.body)
    const ewMem=
    {
        id:uuid.v4(),
        ame:req.body.ame,
        email:req.body.email
    }

    if(!ewMem.ame||!ewMem.email)
    {
        return res.status(400).json({msg:"please give valid crede"})
    }
    memers.push(ewMem);
    res.json(memers)
})


// //Update memer


router.put('/:id',(req,res)=>
{
    const found=memers.some(memer=>memer.id==req.params.id)
    if(found){
        const upMem=req.body;
        memers.forEach(memer=>{
            if(memer.id==req.params.id){
            memer.ame=upMem.ame?upMem.ame:memer.ame;
            memer.email=upMem.email?upMem.email:memer.email;

            res.json({msg:"Details updated",memer})
        }
    })
    }
    else
    res.status(404).json({msg:`Memer with id ${req.params.id} is foud`})
})


//Delete Memer
router.delete('/:id',(req,res)=>
{
    const found=memers.some(memer=>memer.id==req.params.id)
    if(found)
        res.json({msg:'memer deleted',memers:memers.filter(memer=>memer.id!=req.params.id)})
    else
    res.status(404).json({msg:`Memer wth id ${req.params.id} `})
})



 module.exports=router;




