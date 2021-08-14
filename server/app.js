const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");

const cookieparser=require("cookie-parser");
app.use(cookieparser());

app.use(express.json());

//const user = require('./model/userSchema');

//we link the router file to make our route easy
app.use(require("./router/auth"));

const PORT = 8000;
// const PORT = process.env.PORT || 8000;

// app.get('/', (req,res)=>{
//     res.send("hello npl");
//     console.log("hello welcome to new page");
// })
//

app.listen(PORT, () => {
  console.log(`listening at the port no ${PORT}`);
});
