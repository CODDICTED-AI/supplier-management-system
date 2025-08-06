import multer from 'multer';
import path from 'path';
import fs from 'fs';

// 确保上传目录存在
const uploadDir = path.join(process.cwd(), 'uploads', 'contracts');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log('创建上传目录:', uploadDir);
}

console.log('警告: 在Render等云平台上，文件将存储在临时文件系统中，重启后会丢失');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname);
    cb(null, filename);
  }
});

export const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    console.log('文件过滤检查:', {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size
    });
    
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      console.error('文件类型不匹配:', file.mimetype);
      cb(new Error('只允许上传PDF文件'));
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
}); 