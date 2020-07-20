const knex = require("../conncetion/dataConnection")
module.exports = (router) => {
    router.post("/singup", (req, res) => {
        let data1 = req.body
        console.log(data1.name);

        knex.select("*").from("singup").then((data) => {
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
                    knex("singup").insert(data1)
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






 // knex.select("*").from("singup").then((data)=>{
        //     if (req.body.name===undefined || req.body.password===undefined || req.body.gmail===undefined){
        //         res.send({client:"fill the all detailes" })
        //     }else{
        //         var information = true
        //         for(i of data){
        //             if(req.body.gmail==i.gmail){
        //                 information=false
        //             }
        //         }if(information==false){
        //             res.send({client:"you all read singup"})
        //         }else
        //             knex("singup").insert(req.body).then(()=>{
        //                 res.send({client:"singup secssfull"})
        //             })
        //             .catch((err)=>{
        //                 console.log(err);

        //             })
        //         }
        //     }


        // })
        // .catch((err)=>{
        //     console.log(err);

        // })