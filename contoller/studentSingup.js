exports.student_singup=(req,res)=>{
    knex.select("*").from("singup").then((data)=>{
        if (req.body.name===undefined || req.body.password===undefined || req.body.gmail===undefined){
            res.send({client:"fill the all detailes" })
        }else{
            var information = true
            for(i of data){
                if(req.body.gmail==i.gmail){
                    information=false
                }

            }if(information==false){
                res.send({client:"you all read singup"})
            }else{
                knex("singup").insert(req.body).then(()=>{
                    res.send({client:"singup secssfull"})
                })
                .catch((err)=>{
                    console.log(err);
                    
                })
            }
        }
       
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
    
}