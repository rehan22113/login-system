const express = require("express");
const routes = express.Router();
const collection = require("../model/structre")
const bodyParser = require("body-parser")
const flash = require("connect-flash");
const session = require("express-session");
routes.use(flash())
routes.use(session({
	secret:'secret123'
	}));
routes.use(express.json())
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));


routes.get("/",function (req,res){

res.render("index")
    
})
routes.post("/form",async(req,res)=>{
   try{
    const name = req.body.Name;
    const classes = req.body.class;
     const age = req.body.age;

    const data = new collection({
        name:name,
        class:classes,
        Age:age
    })
    await data.save();
    req.flash('info', 'Data save successfully')
    res.redirect("/show");
}catch(err){
    console.log(err)
}
})

routes.get("/show",async(req,res)=>{
    res.render('login', { messages: req.flash('info') });
})
routes.post("/login",async(req,res)=>{
    try{
    const name = req.body.name;
    const data = await collection.findOne({name:name})
    res.render("dashboard",{allData:data.name,allData1:data.class})
    }catch(err){
        console.log(err)
    }
})

module.exports = routes;