import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

dotenv.config();

const app = express();

// Đặt cors ở đây, đầu tiên luôn
app.use(cors({
  origin: 'http://localhost:3000', // hoặc '*' để cho phép tất cả
  credentials: true, // nếu có gửi cookie
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Phục vụ ảnh tĩnh
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Routes
app.use('/api/posts', postRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
