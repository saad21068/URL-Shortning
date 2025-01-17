const express=require("express");
const URL=require("../models/models");
const routes=express.Router();


routes.get("/",async (req,res)=>{
    const allUrls= await URL.find({});
    res.render("home",{
        urls:allUrls,
    });
})

module.exports=routes;