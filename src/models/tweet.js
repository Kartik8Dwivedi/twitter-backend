const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
      maxLength: [400, 'Tweet cannot be more than 400 characters'],
    },
    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hashtag",
        }
    ]
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;