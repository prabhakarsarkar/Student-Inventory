const knex = require("../conncetion/dataConnection");

exports.postStudentdata=(req,res)=>{
    knex("students").insert(req.body).then((data)=>{
        knex.select("*").from("students").then((data)=>{
            res.send(data)
        })
       
    })
}