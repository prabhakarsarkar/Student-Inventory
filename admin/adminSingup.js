const knex = require("../conncetion/dataConnection")
module.exports = (router) => {
    router.post("/admin/Singup", (req, res) => {
        let data1 = req.body
        console.log(data1.name);

        knex.select("*").from("admin").then((data) => {
            if (data1.name == undefined || data1.gmail == undefined || data1.password == undefined) {
                res.send("fill the all details")
            } else {
                var studentSingup = true
                for (var singup of data) {
                    if (data1.gmail == singup.gmail) {
                        studentSingup = false



                    }
                } if (studentSingup === false) {
                    res.send("you are allready singup")
                }
                else {
                    knex("admin").insert(data1)
                        .then((addData) => {
                            res.send("singup seccessfull")
                        })
                        .catch(err => {
                            res.send(err)
                        })

                }
            }

        }).catch(err=>{
            send(err)
        })

    })
}
