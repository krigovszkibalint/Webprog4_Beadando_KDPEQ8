const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose
.connect(process.env.MONGO_URL)
.then(console.log("Connected"))
.catch(err=>console.log(err));

app.use("/api/auth", authRoute);

app.listen("3000", () =>{
    console.log("Backend running");
})