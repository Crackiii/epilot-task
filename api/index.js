const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(bodyParser.json());
const key = process.env.APP_KEY;
const token = process.env.TOKEN;
const port = process.env.PORT;
const baseUrl = "https://api.trello.com";

/**
 * Allow access to all origins
 */
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
