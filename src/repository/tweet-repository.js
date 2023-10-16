import {
  create as _create,
  find,
  findById as _findById,
  findByIdAndDelete,
} from "../models/tweet";

class TweetRepository {
  async create(data) {
    try {
      const tweet = await _create(data);
      return tweet;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
  async getAll(offset, limit) {
    try {
      const tweet = await find().skip(offset).limit(limit);
      return tweet;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
  async findById(id) {
    try {
      const tweets = await _findById(id);
      return tweets;
    } catch (error) {}
  }
  async deleteById(id) {
    try {
      const tweet = await findByIdAndDelete(id);
      return tweet;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
  async getWithComments(id) {
    try {
      const tweet = await _findById(id).populate({ path: "comments" });
      return tweet;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
}
export default TweetRepository;
