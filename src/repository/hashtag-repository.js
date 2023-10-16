import {
  create as _create,
  insertMany,
  findById,
  findByIdAndDelete,
  find,
} from "../models/hashtags";
class HashtagRepository {
  async create(data) {
    try {
      const tweet = await _create(data);
      return tweet;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
  async bulkCreate(data) {
    try {
      const tags = await insertMany(data);
      return tags;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
  async get(id) {
    try {
      const tweets = await findById(id);
      return tweets;
    } catch (error) {}
  }
  async destroy(id) {
    try {
      const tweet = await findByIdAndDelete(id);
      return tweet;
    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }
  async findByName(titleList) {
    try {
      const tags = await find({
        title: titleList,
      });
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
}
export default HashtagRepository;
