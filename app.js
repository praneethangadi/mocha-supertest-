const express=require('express');


const app=express();
app.use(express.json());


task="home";
app.get('/',(req,res)=>{
    res.status(200).send(task);
})

app.post('/',(req,res)=>{
   var name=req.body.name;
   res.send(name);
})

app.listen(3000,()=>{
    console.log('server started');
});

module.exports.app=app;