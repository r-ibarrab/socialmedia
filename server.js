const Application = require("./routes/index")
const API = require("./api/index")
const path = require("path")
const config = require("./config/config")
const cors = require("cors")
const morgan = require("morgan")

const express = require("express");
const app = express();


//Template & statics

app.set("view engine","ejs");
app.set('views', path.join(__dirname, './views/pages'))
app.use(express.static(path.join(__dirname,"public")))

//Middlewares

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false})); 
app.use(morgan("common"))


//Routes

app.use("/api",API);
app.use("/",Application);



app.listen(config.port, (err)=>{
    if(err) return console.log(err.message);
    console.log("Listening in port:",config.port)
})