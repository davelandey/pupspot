const router = require("express").Router();
const validateSession = require("../middleware/validate-session.js")
const PetProfile = require("../models/petProfile.model");
// !Use validate session (req.user.id) - maybe add in userName
router.post("/add", validateSession, async (req, res) => {
  const { userId, dogName, breed, age, dogPic, dogBio, disable } =
    req.body.petProfile;

  const petProfile = new PetProfile({
    userId: req.user._id,
    dogName,
    breed,
    age,
    dogPic,
    dogBio,
    disable,
  });

  try {
    const newPetProfile = await petProfile.save();
    res.json({ petProfile: newPetProfile });
  } catch (error) {
    res.json({ message: error.message });
  }
});

//GET:
// !User specific pet/s
//!Removed validate session from here
router.get("/", async (req, res) => {
  try {
    const petProfile = await PetProfile.find();
    res.json({ petProfile: petProfile });
  } catch (error) {
    res.json({ message: error.message });
  }
});

//! Searching by zip codes - suggestion:
// This link is helpful:https://stackoverflow.com/questions/8303900/mongodb-mongoose-findmany-find-all-documents-with-ids-listed-in-array
// const user = await User.findById(id).select("_id, zipcode")
// let user =[{_id: "", zipcode:""}]
//Map through this, using a function 
// const userId = user.map()

//delete
//! Add in admin verification in order to have access to delete
//see user.controller from Rob's movie example
// ! Ensure someone is the owner before deleting
router.delete("/:id", validateSession, async (req, res) => {
  console.log(req.params);
  try {
    const deletedPetProfile = await PetProfile.deleteOne({
      _id: req.params.id,
      userId: req.user._id,
    });
    res.json({
      message:
        deletedPetProfile.deletedCount > 0
          ? "petProfile removed"
          : "petProfile not found",

      deletedPetProfile: deletedPetProfile,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

//update
router.patch("/update/:id", validateSession, async (req, res) => {
  console.log(req.params);
  try {
    const filter = { _id: req.params.id,
    userId: req.user._id };
    const dataToReplace = req.body.petProfile;
    const returnOptions = {
      returnOriginal: false,
    };
    const petProfile = await PetProfile.findOneAndUpdate(
      filter,
      dataToReplace,
      returnOptions
    );

    res.json({ message: "petProfile updated", petProfile: petProfile });
  } catch (error) {
    res.json({ message: error.message });
  }
});

//get
router.get("/:id", validateSession, async (req, res) => {
  try {
    const petProfile = await PetProfile.findById(req.params.id);
    res.json({ petProfile: petProfile });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
