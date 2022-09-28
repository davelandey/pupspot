require("dotenv").config();
// console.log(process.env.DATABASEURL);
const express = require("express");
const cors = require("cors");

const app = express();
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASEURL)
const db = mongoose.connection;

app.use(cors());
// app.use(express.json());

//! insert controller variables here

db.once("open", () => console.log("Connected to the DB"));

app.use(express.json());

// app.use("/user", userController);
// app.use("/movie", movieController); //<--- New Coders


app.listen(process.env.PORT, function () {
    console.log(`listening on port: ${process.env.PORT}`);
});

// DELETE THIS EDIT
//This is Elena's comment!