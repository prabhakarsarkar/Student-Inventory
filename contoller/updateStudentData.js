const knex = require("../conncetion/dataConnection")
exports.putStudentData = (req, res) => {
    let token = req.headers.cookie.slice(4)
    jwt.sign(token, process.env.adminsecretkey, (err, verifytoken) => {
        if (!err) {
            knex.select("*").from("students")
                .where("id", req.params.id)
                .update(req.body).then((data) => {
                    knex.select("*").from("students").then((data) => {
                        res.send(data)
                    })
                })
        }else{
            res.send("you are not admin")
        }
    })
}