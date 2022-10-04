const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
 
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  locationCategory: {
    type: String,
  },
  locationName: {
    type: String, 
  },
  streetAddress: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zipcode: {
    type: Number,
  },
  placeBio: {
    type: String,
  },
  phone: {
    type: String,
  },
  website: {
    type: String,
  },
  disable: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: String,
  }
});

module.exports = mongoose.model("Location", LocationSchema);