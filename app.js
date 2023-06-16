/* eslint-disable no-console */
const express = require("express");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();
const User = require("./models/user");
const userRoute = require("./routes");

app.use("/users", userRoute);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", async () => {
  if ((await User.countDocuments().exec()) > 0) return;
  try {
    await Promise.all([
      User.create({ name: "User 1" }),
      User.create({ name: "User 2" }),
      User.create({ name: "User 3" }),
      User.create({ name: "User 4" }),
      User.create({ name: "User 5" }),
      User.create({ name: "User 6" }),
      User.create({ name: "User 7" }),
      User.create({ name: "User 8" }),
      User.create({ name: "User 9" }),
      User.create({ name: "User 10" }),
      User.create({ name: "User 11" }),
      User.create({ name: "User 12" }),
    ]);
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT);
