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

/**
 * Get all the lists from specific board
 * @path (NDCWTLdz) id of the board
 */
const getLists = async (url) => {
  const path = "/boards/NDCWTLdz/lists";
  return axios
    .get(`${baseUrl}/${path}/?key=${key}&token=${token}`)
    .then((response) => response.data)
    .catch((error) => error);
};
const getCards = async (id) => {
  const path = `/lists/${id}/cards`;
  return axios
    .get(`${baseUrl}/${path}/?key=${key}&token=${token}`)
    .then((response) => response.data)
    .catch((error) => error);
};
/**
 * Get all the lists with specified board and also the respective cards
 * Send them back to the requested client
 * */
app.get("/getLists", async (req, res) => {
  const lists = await getLists();
  const results = [];
  /**
   * Get all the cards within the specific list
   * I didn't use Promise.all to resolve the promises
   * wanted to make it sequential to get the cards for specific list
   */
  for (const list of lists) {
    const { id } = list;
    const cards = await getCards(id);
    results.push({
      list,
      cards,
    });
  }
  res.send(results);
});

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
