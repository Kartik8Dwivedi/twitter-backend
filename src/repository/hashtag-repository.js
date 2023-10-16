const Hashtag = require("../models/hashtags");
class HashtagRepository {
  async create(data) {
    try {
      const tweet = await Hashtag.create(data);
      return tweet;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
  async bulkCreate(data) {
    try {
      const tags = await Hashtag.insertMany(data);
      return tags;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
  async get(id) {
    try {
      const tweets = await Hashtag.findById(id);
      return tweets;
    } catch (error) {}
  }
  async destroy(id) {
    try {
      const tweet = await Hashtag.findByIdAndDelete(id);
      return tweet;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
  async findByName(titleList) {
    try {
      const tags = await Hashtag.find({
        title: titleList,
      });
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = HashtagRepository;
