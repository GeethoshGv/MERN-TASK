const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

const port = 5000;

app.use("/", require("./router/authRouter.js"));

app.listen(port, () => console.log(`server is running ${port}`));
