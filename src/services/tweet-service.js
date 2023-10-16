const { TweetRepository, HashtagRepository } = require("../repository/index");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    try {
      const content = data.content;
      const tags = content
        .match(/#[a-zA-Z0-9_]+/g)
        .map((tag) => tag.substring(1).toLowerCase());
      const tweet = await this.tweetRepository.create(data);
      let existingTags = await this.hashtagRepository.findByName(tags);
      let titleOfPresenttags = existingTags.map((tags) => tags.title);
      let newTags = tags.filter((tag) => !titleOfPresenttags.includes(tag));
      newTags = newTags.map((tag) => {
        return { title: tag, tweets: [tweet.id] };
      });
      await this.hashtagRepository.bulkCreate(newTags);
      existingTags.forEach((tag) => {
        tag.tweets.push(tweet.id);
        tag.save();
      });
      return tweet;
    } catch (error) {
      console.log("Error in service layer", error);
    }
  }
}

module.exports = TweetService;