const router = require("express").Router();
const validateSession = require("../middleware/validate-session");
const Location = require("../models/location.model");
const SeedData = require("../assets/location.seed.data.json")

// !if req.user.admin ===false then return res.json message - not admin
router.post("/add", validateSession, async (req, res) => {
  // res.json({ message: "location" });


//!search accessability for non members by zip code

  const {
    latitude,
    longitude,
    locationCategory,
    locationName,
    streetAddress,
    city,
    state,
    zipcode,
    placeBio,
    phone,
    website,
    disable,
  } = req.body.location;
  const location = new Location({
    latitude,
    longitude,
    locationCategory,
    locationName,
    streetAddress,
    city,
    state,
    zipcode,
    placeBio,
    phone,
    website,
    disable,
    userId: req.user._id,
  });
  try {
    const newLocation = await location.save();
    res.json({ location: newLocation });
  } catch (error) {
    res.json({ message: error.message });
  }
});

//GET:
router.get("/", validateSession, async (req, res) => {
  try {
    const location = await Location.find();
    res.json({ location: location });
  } catch (error) {
    res.json({ message: error.message });
  }
});

//delete

//! Add in admin verification in order to have access to delete
//see user.controller from Rob's movie example

router.delete("/:id", async (req, res) => {
  try {
    const deletedLocation = await Location.deleteOne({ _id: req.params.id });
    res.json({
      message:
        deletedLocation.deletedCount > 0
          ? "location removed"
          : "location not found",

      deletedLocation: deletedLocation,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

//update
//! Add in admin verification in order to have access to delete
//see user.controller from Rob's movie example
router.patch("/update/:id", validateSession, async (req, res) => {
  console.log(req.params);
  try {
    const filter = { _id: req.params.id };
    const dataToReplace = req.body.location;
    const returnOptions = {
      returnOriginal: false,
    };
    const location = await Location.findOneAndUpdate(
      filter,
      dataToReplace,
      returnOptions
    );

    res.json({ message: "location updated", location: location });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// SEED
router.get("/insertAll", validateSession, async (req, res) => {
  // res.json({message: "Your insertAll endpoint is working"})
  try {
    const insertedLocation = await Location.insertMany(SeedData);
    res.json({ Location: insertedLocation });
  } catch (error) {
    res.json({ message: error });
  }
});

//get
router.get("/:id", validateSession, async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    res.json({ location: location });
  } catch (error) {
    res.json({ message: error.message });
  }
});


module.exports = router;