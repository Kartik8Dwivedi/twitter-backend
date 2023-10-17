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

 ## APIs

 - for creating tweet:
      - POST
      - localhost:3000/api/v1/tweets
      - [req.body] - attributes: content: ""