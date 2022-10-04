const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  admin: {
    type: Boolean,
    required: true,
    default: false,
  },
  firstName:{
    type: String,
  },
  lastName:{
    type: String,
  },
  userName:{
    type: String,
    required: true,
    // unique: true,
  },
  password:{
    type: String,
    required: true,
  },
  privacySettings:{
    type: String,
    required: true,
    default: "public",
  },
  profilePic: {
    type: String,
  },
  humanBio:{
    type: String,
  },
  zipcode:{
    type: Number,
    required: true,
    default: 05404,
  },
  email:{
    type: String,
    required: true,
  },
  disable:{
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", UserSchema);