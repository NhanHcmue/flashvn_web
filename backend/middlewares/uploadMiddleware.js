// backend/middlewares/uploadMiddleware.js
import multer from 'multer';
import path from 'path';

// Cấu hình storage cho multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // thư mục lưu file upload
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // giữ lại đuôi file
  }
});

// Tạo upload middleware
const upload = multer({ storage });

// Export hàm single(fieldName) nhận tên trường input file, trả về middleware multer
export const single = (fieldName) => upload.single(fieldName);
