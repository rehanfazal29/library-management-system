const express = require("express");
const app = express();

const PORT = 8081;

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message : "Home Page"
    })
})
// app.all("*",(req,res)=>{
//     res.status(500).json({
//         message:"Not built yet "
//     })
// })

app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})