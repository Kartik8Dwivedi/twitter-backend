const Tweet = require("../models/tweet");

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
  async getAll(offset, limit) {
    try {
      const tweet = await Tweet.find().skip(offset).limit(limit);
      return tweet;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
  async findById(id) {
    try {
      const tweets = await Tweet.findById(id);
      return tweets;
    } catch (error) {}
  }
  async deleteById(id) {
    try {
      const tweet = await Tweet.findByIdAndDelete(id);
      return tweet;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
  async getWithComments(id) {
    try {
      const tweet = await Tweet.findById(id).populate({ path: "comments" });
      return tweet;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
}
module.exports = TweetRepository;