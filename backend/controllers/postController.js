// controllers/postController.js
import Post from '../models/Post.js'; // hoặc đường dẫn chính xác tới model Post của bạn

export async function getAllPosts(req, res) {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
}

export async function createPost(req, res) {
  try {
    const { title, content, category, bool, eventDate } = req.body;
    const post = new Post({
      title,
      content,
      category,
      bool: bool === 'true',
      eventDate,
      imageUrl: req.file ? '/uploads/' + req.file.filename : ''
    });
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error });
  }
}

export async function updatePost(req, res) {
  try {
    const { title, content, category, bool, eventDate } = req.body;

    const boolValue = bool === 'true' || bool === true; // xử lý bool có thể là string hoặc boolean

    // Nếu bool = true, cần reset tất cả các bài khác về false
    if (boolValue) {
      await Post.updateMany({ bool: true }, { $set: { bool: false } });
    }

    const updateData = {
      title,
      content,
      category,
      bool: boolValue,
      eventDate,
    };

    if (req.file) {
      updateData.imageUrl = '/uploads/' + req.file.filename;
    }

    const updated = await Post.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!updated) return res.status(404).json({ message: 'Post not found' });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error updating post', error });
  }
}


export async function deletePost(req, res) {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Post not found' });

    res.json({ message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error });
  }
}
