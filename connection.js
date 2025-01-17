const mongoose=require('mongoose');

async function connect_mongobd(url){
    return mongoose.connect(url)
    .then(()=> console.log("connected"))
    .catch((err)=> console.log(err));
}

module.exports={
    connect_mongobd,
}