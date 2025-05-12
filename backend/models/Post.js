import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String},
  category: {
    type: String,
    enum: ['educator', 'youth', 'digcomp', 'other'],
    required: true
  },
  bool: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
}, { collection: 'post' });

export default mongoose.model('Post', postSchema);
