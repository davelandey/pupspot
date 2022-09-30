const router = require("express").Router();
// const validateSession = require("../middleware/validate-session");
const Location = require("../models/location.model");

router.post("/add", async (req, res) => {
  // res.json({ message: "location" });
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
  });
  try {
    const newLocation = await location.save();
    res.json({ location: newLocation });
  } catch (error) {
    res.json({ message: error.message });
  }
});

//GET:
router.get("/", async (req, res) => {
  try {
    const location = await Location.find();
    res.json({ location: location });
  } catch (error) {
    res.json({ message: error.message });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  console.log(req.params);
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
router.patch("/update/:id", async (req, res) => {
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

//get
router.get("/:id", async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    res.json({ location: location });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
