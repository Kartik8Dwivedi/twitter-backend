import express from "express";
import bodyParser from "body-parser";
import { connect } from "./config/database.js";

import apiRoutes from "./routes/index.js";

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

import { UserRepository, TweetRepository } from "./repository/index.js";
import LikeService from "./services/like-service.js";

app.listen(PORT, async () => {
  await connect();
  console.log(`Server is running on port ${PORT}.`);
});
 