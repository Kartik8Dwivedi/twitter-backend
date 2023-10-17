import Tweet from "../models/tweet.js";
import crudRepository from "./crud-repository.js";
class TweetRepository extends crudRepository {
  constructor() {
    super(Tweet)
  }
}
export default TweetRepository;
