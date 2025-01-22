import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinaryV2 from '../configs/cloudinaryConfig.js';

const storage = new CloudinaryStorage({
    cloudinary: cloudinaryV2,
    params: {
      folder: 'uploads',  // Folder name in Cloudinary
      allowed_formats: ['jpg', 'jpeg', 'png'],
    },
  });
  
export const upload = multer({ storage });