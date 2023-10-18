import express from "express";
import bodyParser from "body-parser";
import { connect } from "./config/database.js";
import passport from "passport";

import apiRoutes from "./routes/index.js";
import { passportAuth } from './config/jwt-middleware.js'

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport);

app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  await connect();
  console.log(`Server is running on port ${PORT}.`);
});
 