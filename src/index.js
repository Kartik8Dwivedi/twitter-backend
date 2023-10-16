import express from "express";
import { connect } from "./config/database.js";

const app = express();

const PORT = 3000;

app.listen(PORT, async () => {
  await connect();
  console.log(`Server is running on port ${PORT}.`);
});
