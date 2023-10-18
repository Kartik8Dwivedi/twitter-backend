import TweetService from "../services/tweet-service.js";
import upload from '../config/s3-file-upload.config.js'

const singleUploader = upload.single('image');

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
  try {
    singleUploader(req,res,function(err,data){
      if(err){
        return res.status(500).json({
          success: false,
          message: "Error uploading image",
          data: {},
          errors: err,
        });
      }
      console.log("Image URL is: ",req,file);
    })
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

export const getTweet = async (req,res) => {
  try {
    const response = await tweetService.get(req.params.id);
    console.log("Response", response);
    return res.status(201).json({
      success: true,
      message: "Successfully fetched a tweet",
      data: response,
      errors: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to fetch tweet",
      data: {},
      errors: error,
    });
  }
}