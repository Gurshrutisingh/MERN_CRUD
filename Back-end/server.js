const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const userRoutes=require("./router/userRoutes")
const cors=require("cors");
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.URL)
.then(()=>{
    console.log("connected to DB");
    app.listen(process.env.PORT,function () {
        console.log(`Server is running `)
    })
})
.catch((error)=>{
    console.log("error");
})

app.use(userRoutes);