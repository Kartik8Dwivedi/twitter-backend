import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
  try {
    console.log("endpoint hit")
    const response = await tweetService.create(req.body);
    console.log("Response", response)
    return res.status(201).json({
      success: true,
      message: "Tweet created successfully",
      data: response,
      errors: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating tweet",
      data: {},
      errors: error,
    });
  }
};
