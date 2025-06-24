import { Router } from "express";
import {
  uploadImage,
  getImage,
  processImage,
  deleteImage,
} from "../controllers/imageController";
import { upload } from "../utils/upload";

const router = Router();

// Use multer middleware for the upload route
router.post("/upload", upload.single("image"), uploadImage);
router.get("/:id", getImage);
router.post("/:id/process", processImage);
router.delete("/:id", deleteImage);

export default router;
