const express=require('express')
const port=4000;
const app=express();
const path =require ('path')

app.get('/GetTimeStories',(req,res)=>{
    res.sendFile(path.join(__dirname,'./GetTimeStories.json'))
})
app.listen(port,()=>{
    console.log('port started')
})