const router = require("express").Router();
// const validateSession = require("../middleware/validate-session");
const PetProfile = require("../models/petProfile.model");

router.post("/add", async (req, res) => {
  const { userid, dogName, breed, age, dogPic, dogBio, disable } =
    req.body.petProfile;

  const petProfile = new PetProfile({
    userid,
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
router.get("/", async (req, res) => {
  try {
    const petProfile = await PetProfile.find();
    res.json({ petProfile: petProfile });
  } catch (error) {
    res.json({ message: error.message });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  console.log(req.params);
  try {
    const deletedPetProfile = await PetProfile.deleteOne({
      _id: req.params.id,
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
router.patch("/update/:id", async (req, res) => {
  console.log(req.params);
  try {
    const filter = { _id: req.params.id };
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
router.get("/:id", async (req, res) => {
  try {
    const petProfile = await PetProfile.findById(req.params.id);
    res.json({ petProfile: petProfile });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
