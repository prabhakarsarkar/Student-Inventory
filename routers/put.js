const updateStudentData = require("../contoller/updateStudentData")
module.exports = (updateStudent)=>{
    updateStudent.put("/data/update",updateStudentData.putStudentData)
}