import BlogModel from '../models/blogmodel.js';
import CommentModel from '../models/comments.js';
// Like a blog post by ID
export async function likeBlog(req, res) {
  try {
    const { blogId } = req.params;

    // Check if the user has already liked the blog
    const alreadyLiked = await BlogModel.exists({ _id: blogId, likedBy: req.user._id });
    if (alreadyLiked) {
      return res.status(200).json({ message: 'You have already liked this blog.' });
    }

    const updatedBlog = await BlogModel.findByIdAndUpdate(blogId, {
      $push: { likedBy: req.user._id },
      $inc: { likes: 1 },
    }, { new: true });
    res.json({
      success: true,
      message:"you liked the blog",
      updatedBlog:updatedBlog});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Dislike a blog post by ID
export async function dislikeBlog(req, res) {
  try {
    const { blogId } = req.params;

    // Check if the user has already disliked the blog
    const alreadyDisliked = await BlogModel.exists({ _id: blogId, dislikedBy: req.user._id });
    if (alreadyDisliked) {
      return res.status(200).json({ message: 'You have already disliked this blog.' });
    }

    // Update the blog document to add the user's ID to the dislikedBy array
    const updatedBlog = await BlogModel.findByIdAndUpdate(blogId, {
      $push: { dislikedBy: req.user._id },
      $inc: { dislikes: 1 },
    }, { new: true });

    res.status(200).json({   success: true, message: 'Blog liked successfully.', updatedBlog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
