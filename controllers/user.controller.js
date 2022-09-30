const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
//   res.json({ message: "This is a post from signup controller!" });
const {
    firstName,
    userName,
    password,
    zipcode,
    email
}  = req.body.user

const user = new User({
    firstName: firstName,
    userName: userName,
    password: bcrypt.hashSync(req.body.user.password, 10),
    zipcode: zipcode,
    email: email,
  });

  try {
    const newUser = await user.save();
    let token = jwt.sign({ id: newUser._id }, process.env.JWT, {
      expiresIn: 60 * 60 + 24,
    });
    res.status(200).json({ user: newUser, token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
//   res.json({ message: "Hello from PupSpot user controller login!" });
  const{
    userName, 
    password} = req.body.user
  try {
    //searching for user in database
    const user = await User.findOne({ userName: userName });

    if (user) {
      //await user input comparison with database
      const passwordMatch = await bcrypt.compare(
        password,
        user.password
      );

      console.log(passwordMatch);

      if (passwordMatch) {
        //if the user input matches a record in the database..
        let token = jwt.sign({ id: user._id }, process.env.JWT, {
          expiresIn: 60 * 60 * 24,
        });
        res.status(200).json({ message: "Welcome!", user: user, token: token });
      } else {
        res.json({ message: "password mismatch" });
      }
    } else {
      res.json({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/update/:id", async (req, res)=>{
    // res.json({message: "You are about to edit your profile!"})
    // const{
    //   admin,
    //   firstName,
    //   lastName,
    //   userName,
    //   password,
    //   privacySettings,
    //   profilePic,
    //   humanBio,
    //   zipcode,
    //   email,
    //   disable
    // } =req.body.user;
    //Will need to onKeystroke check if username is unique - if we want to do this
    //Another option would be to not display/disbale a user from editing it

    try{
        const filter = {_id: req.params.id};
        const updatedUserInfo = req.body.user;
        const returnOptions ={returnOriginal: false};
    

    const user = await User.findOneAndUpdate(
        filter,
        updatedUserInfo,
        returnOptions
      );

      user.save();
      res.json({ message: "Your profile has been updated!" });
    } catch (error) {
      res.json({ message: error.message });
    }
  });
   

router.patch("/delete", async (req, res)=>{
    res.json({message: "You are about to delete your profile - well, disable, unless you are admin"})


} )

module.exports = router;

