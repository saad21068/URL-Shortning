const express= require("express");
const app = express();
const PORT=8000;
const path =require("path");
const{connect_mongobd}=require("./connection");
const urlRoutes=require("./routes/url_routes");

const staticRoutes= require("./routes/staticRoutes");
const URL=require("./models/models");
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

// app.get("/test",async (req,res)=>{
//     const allUrls= await URL.find({});
//     res.render("home",{
//         urls:allUrls,
//     });
// });
connect_mongobd("mongodb://127.0.0.1:27017/short-url")
    .then(()=>console.log("connected"))
    .catch((err)=>console.log(err));    
    

app.use("/url",urlRoutes);
app.use("/",staticRoutes);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
