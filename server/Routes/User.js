const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const User = require("../Models/User.Model");
const { jwtSecretKey } = require("../constants");

router.use(express.json());
router.use(cookieParser());

router.get("/users", async (req, res) => {
  const users = await User.find({});
  res.status(201).json(users);
});

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // All the data should exist
    if (!(username && email && password)) {
      res.status(400).send("All the field are compulsory");
    }

    // Check if user is already Exist
    const isUserExist = await User.findOne({ email: email });
    if (isUserExist) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Encrypt the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Save the data in Database
    const newUser = await User.create({ username, email, password: hashPassword });
    // Generate the jwt token

    const token = jwt.sign(
      {
        id: newUser._id,
        email,
      },
      jwtSecretKey,
      {
        expiresIn: "12h",
      }
    );

    newUser.token = token;

    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // All the data should exist
    if (!(email && password)) {
      res.status(400).send("All the field are compulsory");
    }

    // User is exist or not
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "User doesn't exists" });
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = await jwt.sign({ id: user._id }, jwtSecretKey, { expiresIn: "12h" });
      user.token = token;
      user.password = undefined;

      // send token in cookie parser

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user,
      });
    } else {
      return res.status(400).json({ error: "Email or password is invalid" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
