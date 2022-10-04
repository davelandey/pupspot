const router = require("express").Router();
const Message = require("../models/message.model");
const validateSession = require("../middleware/validate-session.js")

//* <<<<<<< ADDING A MESSAGE >>>>>>>>>>

router.post("/add/:locationId", validateSession, async (req, res) => {
   // res.json({message: "This is a post from message controller!"})
   // console.log(req.body)

  //  **Validate session will replace userName below - once this is in, can remove this (req.user.userName)
   const {locationId, userName, userId, body, timeStamp, disable} = req.body.message;

   const message = new Message({
      //locationId change to req.location._id once location is up and running
      // locationId: req.location._id,
      locationId: req.params.locationId,
      // locationId: req.query.locationId,
      userName: req.user.userName,
      userId: req.user._id,
      body,
      timeStamp,
      disable,
   });

   try {
      const newMessage = await message.save();
      res.json({ message: newMessage });
    } catch (error) {
      res.json({ message: error });
    }
  
  });

//* <<<<<<< GETTING ALL MESSAGES BASED ON LOCATION >>>>>>>>>>
//!Add filtering here for location messages - filter option (req.params.locationId)
  router.get("/:locationId", validateSession, async (req, res) => {
   try {
     const message = await Message.find({locationId: req.params.locationId});
     res.json({ message: message });
   } catch (error) {
     res.json({ message: error.message });
   }
 });

  //* <<<<<<< DELETING A MESSAGE >>>>>>>>>>

//! Add in admin verification in order to have access to delete
//see user.controller from Rob's movie example
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
router.patch("/update/:id", validateSession, async (req, res) => {
   console.log(req.params);
   try {
     const filter = { _id: req.params.id };
     const dataToReplace = req.body.message;
     const returnOptions = {
       returnOriginal: false,
     };
    //  *Owner ID = req.user.user-ID, this goes in filter - best to use this as it is constant
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