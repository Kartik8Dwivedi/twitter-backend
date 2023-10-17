import hashtag from "../models/hashtags.js";
import crudRepository from "./crud-repository.js";
class HashtagRepository extends crudRepository {
  constructor() {
    super(hashtag);
  }
  async bulkCreate(data) {
    try {
      const tags = await hashtag.insertMany(data);
      return tags;
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
