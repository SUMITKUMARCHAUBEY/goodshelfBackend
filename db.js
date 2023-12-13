const mongoose = require("mongoose");

const connectToDB=()=>{
    mongoose.connect(env.DB_URL)
    .then(()=>{
        console.log('db connected');
    })
    .catch((e)=>{
        console.log(e);
    })
}
module.exports=connectToDB;