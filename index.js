const express = require("express");
const app = express();
// const router = express.Router();
const jwt = require("jsonwebtoken")
const env = require("dotenv").config()
const con = require("./Schema/hasTable")
const verify = require("./midilwere/midelwere");



app.use(express.json())

const studentSingup = express.Router();
app.use("/",studentSingup)
require("./routers/singup")(studentSingup)

const studentLogin = express.Router();
app.use("/",studentLogin)
require("./routers/login")(studentLogin,jwt)

const getAllStudentData = express.Router()
app.use("/",getAllStudentData)
require("./routers/get")(getAllStudentData)

const postStudentData = express.Router();
app.use("/",postStudentData)
require("./routers/post")(postStudentData)

const updateStudent = express.Router();
app.use("/",updateStudent)
require("./routers/put")(updateStudent)

const deleteStudentdata = express.Router();
app.use("/",deleteStudentdata)
require("./routers/delete")(deleteStudentdata)

const adminSingup= express.Router();
app.use("/",adminSingup)
require("./admin/adminSingup")(adminSingup) 

const adminLoing=express.Router()
app.use("/",adminLoing)
require("./admin/adminLoing")(adminLoing,jwt)

// require("./routers/j")(router,knex)
const port = process.env.port 
app.listen(port,()=>{
    console.log("server is working port",port);
    
})


