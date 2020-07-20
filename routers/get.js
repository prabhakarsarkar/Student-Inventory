const allStudentData= require("../contoller/AllStudentData")
module.exports = (getAllStudentData)=>{
    getAllStudentData.get("/data",allStudentData.allStudentData)
     
}   