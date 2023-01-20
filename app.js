const express=require('express');
const app=express();
const port=process.env.PORT || 7070;

app.get('/product',(req,res)=>{
    return res.status(200).json({Msg:"All Products"});
});


app.listen(port,()=>{console.log('app on air')});