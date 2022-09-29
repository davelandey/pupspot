const router = require("express").Router();
const validateSession = require("../middleware/validate-session");
const Location = require("../models/location.model");

router.post("/add", async (req, res) => {
  res.json({ message: "location" });

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

module.exports = router;
