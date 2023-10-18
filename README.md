# Twitter Backend Clone

- In this project we will try to rebuild the features of twitter/threads/facebook by using NodeJS, ExpressJS and MongoDB as the database;
- This project will be of monolith architecture.
- The testing of this project is done by JEST.
- We will be deploying this backend project on AWS by using docker and concept of kubernetes as well at the completion of this backend.
- The features of this backend project will increase as the project grows.
- Currently I am pushing a cleaner version of the codebase for the twitter backend; we are building the frontend for this project as well in ReactJS.

# Features of this Twitter backend:

- User should be able to create a post
  - [The post/tweet cannot be more than 400 characters]
  - [Every post/tweet will have support of image/video upload]
- Any post should be visible to all those users who follows the author
- Anyone who follows you can comment on a post/tweet
- Anyone who follows you can like on a post/tweet
- We can comment on a comment
- We can like/dislike any comment
- Retweeting

- User Profile:

  - Name
  - Follower Count
  - Bio
  - Last 10 tweet from the user

- Pagination on tweets
- User authentication and authorization
- Private/Public profile restrictions
- Every tweet might be having some specific hashtags


## API's
  - Create a tweet
    - POST request
    - localhost:{PORT}/api/v1/tweets
    - req.body -> content to be pushed inside tweet
  - Get Tweet
    - GET request
    - localhost:{PORT}/api/v1/tweets/:id
    - req.params.id -> id of tweet to be fetched
  - Comment on a Tweet
    - POST request
    - localhost:{PORT}/api/v1/comments
    - parameters required:
      - modelType = req.query.modelType;
      - modelId = req.query.modelId;
      - userId = req.body.userId;
      - content = req.body.content;
  - Like/Unlike a tweet/comment
    - POST request
    - localhost:{PORT}/api/v1/likes/toggle
    - parameters required:
      - modelId = req.query.modelId;
      - modelType = req.query.modelType;
      - userId = req.body.userId;
      - modelId is the id of specific tweet/comment
      - modelType is a enum : ["Tweet","Comment"]
      - userId is the id of the user liking/unliking the Tweet/Comment