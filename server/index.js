const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log("database not connected", error);
  });

const app = express();

const port = 5000;

app.use("/", require("./router/authRouter.js"));

app.listen(port, () => console.log(`server is running ${port}`));
