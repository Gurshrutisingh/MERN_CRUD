const express=require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const User=require("../model/userModel");
const router=express.Router();
router.post ('/',async(req,res)=>{
    // var name=req.body.name;
    //var email=req.body.email;
    //var age=req.body.age;
    const {name,email,age}=req.body;
    try{
    const userAdded =await User.create({
        name:name,
        email:email,
        age:age
    })
    res.status(201).json(userAdded);
   }
   catch(error){
    res.status(400).json({error:error.message});
   }
})
router.get("/",async function (req,res) {
    
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})
router.get("/:id/",async function (req,res) {
    const { id }=req.params;
    try {
        const allUsers = await User.findById({_id:id});
        res.status(200).json(allUsers);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})
router.delete("/:id/",async function (req,res) {
    const { id }=req.params;
    try {
        const allUsers = await User.findByIdAndDelete({_id:id});
        res.status(200).json(allUsers);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})
router.patch("/:id/", async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    try {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
module.exports=router;