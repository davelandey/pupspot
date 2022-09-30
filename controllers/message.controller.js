const router = require("express").Router();
const { rawListeners } = require("../models/message.model");
const Message = require("../models/message.model");

//* <<<<<<< ADDING A MESSAGE >>>>>>>>>>

router.post("/add" , async (req, res) => {
   // res.json({message: "This is a post from message controller!"})
   // console.log(req.body)

   const {locationId, userName, body, timeStamp, disable} = req.body.message;

   const message = new Message({
      //locationId change to req.location._id once location is up and running
      locationId,
      userName,
      body,
      timeStamp,
      disable,
   });

   try {
      const newMessage = await message.save();
      res.json({ message: newMessage });
    } catch (error) {
      res.json({ message: error.message });
    }
  
  });

  //* <<<<<<< GETTING ALL MESSAGES >>>>>>>>>>

  router.get("/", async (req, res) => {
   try {
     const message = await Message.find();
     res.json({ message: message });
   } catch (error) {
     res.json({ message: error.message });
   }
 });

  //* <<<<<<< DELETING A MESSAGE >>>>>>>>>>

  router.delete("/:id", async (req, res) => {
   console.log(req.params);
   try {
     const deletedMessage = await Message.deleteOne({
       _id: req.params.id,
      //! we will need to have a connection to the userId in order for this to work for users
     });
     res.json({
       message:
         deletedMessage.deletedCount > 0 ? "message removed" : "message not removed",
       deletedMessage: deletedMessage,
     });
   } catch (error) {
     res.json({ message: error.message });
   }
 });


  //* <<<<<<< EDITING A MESSAGE >>>>>>>>>>
//! You supply the record ID in the URL
//! In the body you supply what is needed to update

//! We will also need to connect this to the userName OWNER connected with the message
//Users can only edit their own messages
router.patch("/update/:id", async (req, res) => {
   console.log(req.params);
   try {
     const filter = { _id: req.params.id };
     const dataToReplace = req.body.message;
     const returnOptions = {
       returnOriginal: false,
     };
     const message = await Message.findOneAndUpdate(
       filter,
       dataToReplace,
       returnOptions
     );
     res.json({ message: "message edited successfully", message: message });
   } catch (error) {
     res.json({ message: error.message });
   }
 });


module.exports = router;