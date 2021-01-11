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
const baseUrl = "https://api.trello.com/1";

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
const getLists = async () => {
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
  console.log("REQUEST RECIEVED");
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

/**
 * Create a card on a specific list
 * @param name - Name of the card
 * @param idList - Id of the list to which the card will be assigned
 */
const createCard = async (name, idList) => {
  const path = `cards`;
  return axios
    .post(
      `${baseUrl}/${path}?key=${key}&token=${token}&idList=${idList}&name=${name}`
    )
    .then((response) => response.data)
    .catch((error) => error);
};

/**
 * Create a card route
 */
app.post("/createCard", async (req, res) => {
  const { name, idList } = req.body;
  const card = await createCard(name, idList);
  if (card.id) {
    const cards = await getCards(idList);
    res.send(cards);
  } else {
    res.send(card);
  }
});

/**
 * Move card from one list to another
 * @param id - Id of the card
 * @param idList - Id of the list to which you want to move the card
 */
const moveCard = (id, idList) => {
  const path = `cards/${id}`;
  return axios
    .put(`${baseUrl}/${path}?key=${key}&token=${token}&idList=${idList}`)
    .then((response) => response.data)
    .catch((error) => error);
};
/**
 * Move card route
 */
app.post("/moveCard", async (req, res) => {
  const { id, idList } = req.body;
  const card = await moveCard(id, idList);
  res.send(card);
});

/**
 * Delete a card
 * @param id - Id of the card you want to delete
 */
const deleteCard = (id) => {
  const path = `cards/${id}`;
  return axios
    .delete(`${baseUrl}/${path}?key=${key}&token=${token}`)
    .then((response) => response.data)
    .catch((error) => error);
};
/**
 * Delete a card route
 */
app.post("/deleteCard", async (req, res) => {
  const { id } = req.body;
  const card = await deleteCard(id);
  res.send(card);
});

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
