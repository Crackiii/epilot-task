# Trello API

Accessing trello api to manage your Todo's.

# Project Setup

- [x] Clone the repo `https://github.com/Crackiii/epilot-task.git`
  * `cd epilot-task`
  
- [x] To run the Node backend run the following commands
  * `cd api`
  * `npm install`
  * `npm run dev` to run in dev mode
  * `npm start` for prod
  * In the backend, the `.env` file is provided, which contains the `app-key`, `token` and `port`
  
- [x] To run the frontend run the following commands
  * `npm install` in the root directory of the app
  * `npm start`
  * In the `src/services/fetch.js` the `baseURL = "http://localhost:4002";`
   * If anyone intends to change the port on the `.env` should make the change here.

# Testing

- [x] To run all the written unit test run the following commands
  * `npm test`

# Expected Behavior

- [x] When the app is running, the page will load the `lists` (Todo and Done)
- [x] Each list will have the cards
- [x] Each Todo cards will be marked un-checked and the done checked.
- [x] Once you check the todo cards, an api call will be made which will show the loader icon and then both of the lists will be updated, the same case will go with done cards.
- [x] Once typed anything in the input box and hit enter, the item will go to the `Todo` list.
- [x] If any of the lists are empty the list will show `No cards found !`
