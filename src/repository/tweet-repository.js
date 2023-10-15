const Tweet = require("../models/tweet");

class TweetRepository {
  async create(content, userEmail) {
    try {
      const tweet = await Tweet.create({ content, userEmail });
      return tweet;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
  async findAll() {
    try {
        const tweet = await Tweet.find();
        return tweet;
    } catch (error) {
        console.log("Error in repository layer", error);
    }
  }
  async findById(id) {
    try {
        const tweets = await Tweet.findById(id);
        return tweets;
    } catch (error) {
        
    }
  }
  async updateById(id, content) {
    try {
        const tweet = await Tweet.findByIdAndUpdate(id, {content}, {new: true});
        return tweet;
    } catch (error) {
        console.log("Error in repository layer", error);
    }
  }
  async deleteById(id) {
    try {
        const tweet = await Tweet.findByIdAndDelete(id);
        return tweet;
    } catch (error) {
        console.log("Error in repository layer", error);
    }
  }
  async getWithComments(id){
    try {
        const tweet = await Tweet.findById(id).populate({path:"comments"});
        return tweet;
    } catch (error) {
        console.log("Error in repository layer", error);
    }
  }
}

module.exports = TweetRepository;
