const jwt = require("jsonwebtoken")
const knex = require("../conncetion/dataConnection")
exports.deteleStudentData = (req, res) => {
    let token = req.headers.cookie.slice(4)
    jwt.verify(token,process.env.adminsecretkey,(err,verifytoken)=>{
        if(!err){
            knex("singup").select("singup.gmail")
            .then((data)=>{
                res.send(data)
            }).catch(err=>{
                res.send(err)
            })
            
        }else{
            res.send("you are not admin")
        }
    })
}
