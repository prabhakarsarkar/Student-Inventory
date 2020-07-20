const deteleData = require("../contoller/deteleStudentData")
module.exports = (deleteStudentdata,knex)=>{
    deleteStudentdata.delete("/delete",deteleData.deteleStudentData)
}