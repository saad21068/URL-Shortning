const shortId = require('shortid'); 

const URL = require("../models/models"); 

async function handleShortUrl(req, res) {
    const body = req.body; 
    console.log(body);
    if (!body.url) {
        return res.status(400).json({ error: "url is required" });
    }

    const shortid = shortId(); 

    try {
        await URL.create({
            shortId: shortid,
            redirectUrl: body.url,
            visitHist: [],
        });
        return res.render("home",{
            id:shortid,
        })
        // return res.status(200).json({ shortId: shortid });
    } catch (err) {
        console.error("Error creating URL document:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
}

async function handleGetRedirect(req,res){
    try{
        const sId=req.params.shortID;
        if(!sId){
            return res.status(400).send("Short ID is required");
        }
        const entry=await URL.findOneAndUpdate({shortId:sId},{$push:{visitHist:{timestamp:Date.now()}}});
        if(!entry){
            return res.status(404).send("Short URL not found");
        }
        res.redirect(entry.redirectUrl);
    }catch(err){
        console.error("Error redirecting:",err);
        return res.status(500).send("Internal server error");
    }
}

async function handleGetAnalytics(req,res){
    try{
        const sId=req.params.shortID;
        if(!sId){
            return res.status(400).send("Short ID is required");
        }
        const entry=await URL.findOne({shortId:sId});
        if(!entry){
            return res.status(404).send("Short URL not found");
        }
        return res.status(200).json({totalClicks:entry.visitHist.length,
            Analytics:entry.visitHist});
    }
    catch(err){
        console.error("Error fetching analytics:",err);
        return res.status(500).send("Internal server error");
    }
};
module.exports = {
    handleShortUrl,
    handleGetRedirect,
    handleGetAnalytics,
};
