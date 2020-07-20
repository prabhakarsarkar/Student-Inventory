const knex = require("../conncetion/dataConnection")
module.exports= (admin,jwt)=>{
admin.post("/admin/login",(req, res) => {
    var gmail = req.body.gmail
    var password = req.body.password
    knex("admin").select("admin.gmail", "admin.password")
        .where({ "admin.gmail": gmail, "admin.password": password })
        .then((data) => {
            if (data.length == 0) {
                res.send("fisrt do sindup")
            } else {
                var token = jwt.sign({
                    "gmail": data[0].gmail,
                    "password": data.password
                }, process.env.adminsecretkey, { expiresIn: "24h" },
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
})
} 