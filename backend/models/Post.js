import { Schema, model } from 'mongoose';

const postSchema = new Schema({
  title: String,
  content: String,
  imageUrl: String,
  category: {
    type: String,
    enum: ['educator', 'youth', 'digcomp', 'other'],  // Chỉ cho phép 4 giá trị này
    required: true, // nếu bắt buộc phải có category
  },
  bool: Boolean,
  eventDate: Date,
}, { timestamps: true });

export default model('Post', postSchema);
