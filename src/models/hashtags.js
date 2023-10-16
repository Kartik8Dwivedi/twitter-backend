import { Schema, model } from "mongoose";

const hashtagSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  tweets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tweet",
    },
  ],
});

const Hashtag = model("Hashtag", hashtagSchema);
export default Hashtag;
