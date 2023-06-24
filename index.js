const express=require("express")
const app=express()
const port=7000;

app.get('/user',(req,res)=>{
    res.json({message:"get request Received"})
})

app.post('/user',(req,res,next)=>{
   const error=new Error('somethong went wrong');
   next(error);
},(req,res)=>{
    res.json({message:"post request received"})
}
)

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({message:"internal server error"})
})

app.get('/',(req,res)=>{
    res.json("server is running")
})

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
})