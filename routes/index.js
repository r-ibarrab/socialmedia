const router = require("express").Router();
const db = require("../db/dummy")

router.get("/",(req,res)=>{
    let data =db.slice(0,5)
    
    res.render("home",{posts:data})
})

router.get("/login",(req,res)=>{
    res.send("todo bien")
})

router.get("/register",(req,res)=>{
    res.render("register")
})

router.get("/post",(req,res)=>{
    res.send("todo bien")
})
router.get("/user",(req,res)=>{
    res.send("todo bien")
})


module.exports = router;