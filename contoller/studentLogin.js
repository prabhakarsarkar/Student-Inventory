const jwt = require("jsonwebtoken")
const knex = require("../conncetion/dataConnection")
exports.studentLoing = (req, res) => {
    var gmail = req.body.gmail
    var password = req.body.password
    knex("singup").select("singup.gmail", "singup.password")
        .where({ "singup.gmail": gmail, "singup.password": password })
        .then((data) => {
            if (data.length == 0) {
                res.send("fisrt do sindup")
            } else {
                var token = jwt.sign({
                    "gmail": data[0].gmail,
                    "password": data.password
                }, process.env.secretkey, { expiresIn: "24h" },
                    (err, token) => {
                        if (!err) {
                            res.cookie("key", token)
                            res.send("ok")
                        } else {
                            res.send(err)
                        }
                    })
            }

        }).catch(err => {
            res.send(err)
        })
}  