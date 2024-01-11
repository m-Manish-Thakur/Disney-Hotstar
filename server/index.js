const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { MongoDB } = require("./constants");
const dotenv = require("dotenv");
dotenv.config();

// Routes
const userRoute = require("./Routes/User");

<<<<<<< HEAD
app.use(cors({ origin: "https://disney-hotstar-ivory.vercel.app" }));
=======
app.use(cors({ origin: 'https://disney-hotstar-ivory.vercel.app' }));
>>>>>>> f3197f4897a5dce4eb54c69677039ef3c3da6424
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Welcome to Disney+ Hotstar");
});

// Routes

app.use("/user", userRoute);

// Ports and Database Connect

app.listen(8000, () => {
  console.log("Server Started");
  mongoose
    .connect(MongoDB)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
});
