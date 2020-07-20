const stdunt_login =require("../contoller/studentLogin")
module.exports = (login) => {
    login.post("/login",stdunt_login.studentLoing) 
}   