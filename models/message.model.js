const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
 locationId:{
    type: String,
    required: true,
    unique: true,
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
    type: Date,
    default: Date.now(),
  },
 disable: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Message", MessageSchema);
