const express = require('express');
const connect = require('./config/database');
const Tweet = require('./models/tweet');

const app = express();

const PORT = 3000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}.`);
  await connect();
    // const tweet = await Tweet.create({
    //   content: "Hello World!",
    //   userEmail: "a@b.com",
    // });
    // console.log(tweet)
})