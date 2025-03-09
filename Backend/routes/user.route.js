const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const jwtsecret = "mynameiskhan";

router.post("/createuser", [
  body("name").isLength({ min: 3 }).withMessage("Name is required"),
  body("email").isEmail().withMessage("Enter Valid Email"),
  body("password").isLength({ min: 6 }).withMessage("Enter valid password")
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  let salt = await bcrypt.genSalt(10);
  let secpassword = await bcrypt.hash(req.body.password, salt);
  try {
    await userModel.create({
      name: req.body.name,
      email: req.body.email,
      password: secpassword,
      location: req.body.location
    })
    res.json({ message: "user created successfully", success: true })
  } catch (error) {
    console.log(error);
    res.json({ message: "error while creating user", success: false })
  }
})

router.post("/loginuser", [
  body("email").isEmail().withMessage("Enter correct email"),
  body("password").exists().withMessage("Enter correct password")
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "User not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials", success: false });
    }

    const token = jwt.sign({ _id: user._id }, jwtsecret, { expiresIn: "24h" });
    res.json({ message: "User logged in successfully", success: true, authToken: token });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error while logging in user", success: false });
  }
})

module.exports = router;