const express=require("express");
const {handleShortUrl,handleGetRedirect,handleGetAnalytics}=require("../controllers/http_request");
const routes=express.Router();

routes.post("/",handleShortUrl)
routes.get("/:shortID",handleGetRedirect); 
routes.get("/analytics/:shortID",handleGetAnalytics);
module.exports=routes;