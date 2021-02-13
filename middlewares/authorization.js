const jwt = require("jsonwebtoken");
const { secret } = require("../config/config")

const verify =  (token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,secret,(err,decoded)=>{
            if(err) reject(new Error(err.message));
            console.log(decoded)
            resolve(decoded)
        })
    })
    
}


const generate=async (user)=>{
    try{
        const token = await jwt.sign(user,secret)
        return token;
    }catch(err){
        console.log(err.message)
    }

}
module.exports = {
    generate,
    verify
}