require("dotenv").config();
// console.log(process.env.DATABASEURL);
const express = require("express");
const cors = require("cors");

const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASEURL);
const db = mongoose.connection;

const locationController = require("./controllers/location.controller");
const petProfileController = require("./controllers/petProfile.controller");
const userController = require("./controllers/user.controller")

app.use(cors());


db.once("open", () => console.log("Connected to the DB"));

app.use(express.json());


app.use("/user", userController);
app.use("/location", locationController);
app.use("/petProfile", petProfileController);


app.listen(process.env.PORT, function () {
  console.log(`listening on port: ${process.env.PORT}`);
});
