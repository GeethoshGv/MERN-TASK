const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
//middleware
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log("database not connected", error);
  });

app.use(express.json());

const port = 5000;

app.use("/", require("./router/authRouter.js"));

app.listen(port, () => console.log(`server is running ${port}`));
