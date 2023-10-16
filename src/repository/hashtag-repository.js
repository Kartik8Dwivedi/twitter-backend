import hashtag from "../models/hashtags";
class HashtagRepository {
  async create(data) {
    try {
      const tweet = await hashtag.create(data);
      return tweet;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
  async bulkCreate(data) {
    try {
      const tags = await hashtag.insertMany(data);
      return tags;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
  async get(id) {
    try {
      const tweets = await hashtag.findById(id);
      return tweets;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
  async destroy(id) {
    try {
      const tweet = await hashtag.findByIdAndDelete(id);
      return tweet;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
  async findByName(titleList) {
    try {
      const tags = await hashtag.find({
        title: titleList,
      });
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
}
export default HashtagRepository;
