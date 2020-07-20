const jwt = require("jsonwebtoken")
const knex = require("../conncetion/dataConnection")
exports.allStudentData = (req, res) => {
    let token = req.headers.cookie.slice(4)
    jwt.verify(token, process.env.secretkey, (err, verifydata) => {
        if (!err) {
            knex.select("*").from("students").then((data) => {
                res.send(data)
            }).catch((err) => {
                send(err)
            })
        }
        else{
            res.send("token is not verify")
        }
    })
}
