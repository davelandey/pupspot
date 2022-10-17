const mongoose = require("mongoose");



const MessageSchema = new mongoose.Schema({
  locationId:{
    type: String,
    required: true,
  },
  userId:{
    type: String,
    required: true,
  },
  userName: {
     type: String,
     required: true,
   },
   body: {
      type: String,
      required: true,
    },
  //!Explore timestamp...
 timeStamp: {
    type: String,
    default: Date.now(),
  },
 disable: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Message", MessageSchema);
