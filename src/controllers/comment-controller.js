 import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

 export const createComment = async (req, res) => {
   try {
     const modelType = req.query.modelType;
     const modelId = req.query.modelId;
     const userId = req.user.id;
     const content = req.body.content;
     const response = await commentService.create(
       modelId,
       modelType,
       userId,
       content
     );
     console.log("Response", response);
     return res.status(201).json({
       success: true,
       message: "Comment created successfully",
       data: response,
       errors: {},
     });
   } catch (error) {
     return res.status(500).json({
       success: false,
       message: "Error creating comment",
       data: {},
       errors: error,
     });
   }
 };
