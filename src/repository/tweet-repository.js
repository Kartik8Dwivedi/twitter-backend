import Tweet from "../models/tweet";

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
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
}
export default TweetRepository;
