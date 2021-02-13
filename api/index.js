const response = require("../network/response")
const db = require("../db/dummy")
const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("you are in api")
})
router.get("/posts/:start",(req,res)=>{
  try{
    if(!Number.isInteger(Number(req.params.start))){
        throw new Error("El índice de inicio tiene que ser un número entero")
    }
    let start = parseInt(req.params.start);
    let data=[];
    if(db.length > start){
        let end = db.length >= (start+5) ? (start+5) : start +(db.length - start);
        for(let c=start;c<end;c++){
            data.push(db[c])
        }
        console.log("Start: ",start,", end: ",end)
        console.log("datos: ",data.length)
    response.success(req,res,data,200)
       
    }else if(db.length ===start){
        response.success(req,res,[],200)
       

    }else{
        throw new Error("Indice fuera de rango");
    }

  }catch(err){
    console.log(err)
    response.error(req, res,err.message, 500)
  
  }

})

module.exports= router;