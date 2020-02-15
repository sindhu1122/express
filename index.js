const express = require('express');
const path=require('path');
const app = express();
const logger=require('./middleware/logger')


//express-handlebars middleware


//body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//middleware workig sytax
app.use(logger)//Init middleware




//Get single Memer form group og memeers present
// app.get('/api/memers/:id',(req,res)=>
// {
//     const found=memers.some(memer=>memer.id==req.params.id)
//     if(found)
//         res.json(memers.filter(memer=>memer.id==req.params.id))
//     else
//     res.status(404).json({msg:`Memer wth id ${req.params.id} `})
// })





//app.get('/api/memers',(req,res)=>res.json(memers));




// app.get('/', (req,res)=>{
//     res.send('<h1>Hello World !</h>')
//     //res.sendFile(path.join(__dirname,'public','index.html'))
// });



//or to set a static folder we ca also use static this helps to sed multiple pages server side
//app.use(express.static(path.join(__dirname,'pulic')));

 app.use('/api/memers',require('./routes/api/memers'))

const port = process.env.port|| 8000;
app.listen(port,()=>console.log(`server started ${port}`));