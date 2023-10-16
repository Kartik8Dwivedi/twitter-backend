const express = require("express");
const connect = require("./config/database");

const { HashtagRepository, TweetRepository } = require("./repository/index");
const TweetService = require("./services/tweet-service");

const app = express();

const PORT = 3000;

app.listen(PORT, async () => {
  await connect();
  console.log(`Server is running on port ${PORT}.`);
});
