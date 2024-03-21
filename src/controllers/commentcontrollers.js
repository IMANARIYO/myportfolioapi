import BlogModel from '../models/blogmodel.js';
import CommentModel from '../models/comments.js';

// Create a comment
export async function createComment(req, res) {
  try {
   
    const { blogId } = req.params;
    let newObject = { ...req.body }
    newObject.blog = blogId;
    newObject.user= req.user._id;
    newObject.username= req.user.fullNames;
    

    const savedComment = await CommentModel.create(newObject);
    await BlogModel.findByIdAndUpdate(blogId, {
        $push: { comments: savedComment._id },
        $addToSet: { commentedBy: req.user._id },
      });
      BlogModel.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Read comments for a blog post
export async function getComments(req, res) {
  try {
    const { blogId } = req.params;
    const comments = await CommentModel.find({ blog: blogId })
    .populate('tetsimonies')
            .populate('commentedBy')
            .populate('comments')
            .populate('likedBy')
            .populate('dislikedBy')
            .populate('likedBy')
            .populate('blog')
;
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update a comment
export async function updateComment(req, res) {
  try {
    const { commentId } = req.params;
    const { comment } = req.body;

    const updatedComment = await CommentModel.findByIdAndUpdate(
      commentId,
      { comment },
      { new: true }
    );

    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Delete a comment
export async function deleteComment(req, res) {
  try {
    const { commentId } = req.params;
    await CommentModel.findByIdAndDelete(commentId);
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
