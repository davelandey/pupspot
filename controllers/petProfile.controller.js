const router = require("express").Router();
// const validateSession = require("../middleware/validate-session");
const PetProfile = require("../models/petProfile.model");

router.post("/add", async (req, res) => {
  // res.json({ message: "location" });
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

module.exports = router;
