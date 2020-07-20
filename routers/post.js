const data = require("../contoller/postStudentData")
module.exports = (postStudentData)=>{ 
    postStudentData.post("/post",data.postStudentdata)
    
}