const mongoose = require("mongoose");

function connectDB(){

mongoose.connect("mongodb://localhost:27017/mangoes",{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Database Established")   
})
.catch((err)=>{
    console.log(err)
})

}

module.exports = connectDB;