import { upload } from "../middlewares/multer_middleware.js";
import express from "express";

const router = express.Router()
router.post('/upload', upload.single('file'), (req, res) => {
    try {
      res.status(200).json({
        message: 'Upload successful',
        url: req.file.path,  // Cloudinary image URL
      });
    } catch (error) {
      res.status(500).json({ error: 'Upload failed' });
    }
  });
  
  export default router;