const mongoose = require("mongoose");


const structre = new mongoose.Schema({

    name:{
        type:String
    },
    class:{
        type:String
    },
    Age:{
        type:String
    }
})


const model = new mongoose.model("collection",structre);

module.exports= model;