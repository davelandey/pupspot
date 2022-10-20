const mongoose = require("mongoose");
const PetProfileSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },

  dogName: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
  },
  age: {
    type: Number,
  },
  dogPic: {
    type: String,
    default: "https://rremiumb.sirv.com/Lenny.jpg",
  },

  dogBio: {
    type: String,
  },

  disable: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("PetProfile", PetProfileSchema);
