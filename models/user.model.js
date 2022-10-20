const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  admin: {
    type: Boolean,
    required: true,
    default: false,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  userName: {
    type: String,
    required: true,
    // unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  privacySettings: {
    type: String,
    required: true,
    default: "public",
  },
  profilePic: {
    type: String,
    default:
      "https://rremiumb.sirv.com/beautybyewa_1572008312234_original._CR0%2C0%2C734%2C734_._FMjpg_.jpg",
  },
  humanBio: {
    type: String,
  },
  zipcode: {
    type: Number,
    required: true,
    default: 05404,
  },
  email: {
    type: String,
    required: true,
  },
  disable: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", UserSchema);
