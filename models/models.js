const mongoose = require("mongoose");
//Schema
const urlSchema=new mongoose.Schema(
    {
        shortId:{
            type:String,
            require:true,
            unique:true, 
        },
        redirectUrl:{
            type:String,
            require:true,
        },
        visitHist:[{timestamp:{type:Number}}],
},{timestaps:true});
            

const URL=mongoose.model('URL',urlSchema);

module.exports = URL;

