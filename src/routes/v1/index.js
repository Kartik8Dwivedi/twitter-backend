import express from "express";

import { createTweet } from "../../controllers/tweet-controller.js";

const router = express.Router();

router.post("/tweets", createTweet);
router.get("/", (req, res) => {
  res.send("Hello World!");
});

export default router;
