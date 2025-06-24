"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imageController_1 = require("../controllers/imageController");
const upload_1 = require("../utils/upload");
const router = (0, express_1.Router)();
// Use multer middleware for the upload route
router.post("/upload", upload_1.upload.single("image"), imageController_1.uploadImage);
router.get("/:id", imageController_1.getImage);
router.post("/:id/process", imageController_1.processImage);
router.delete("/:id", imageController_1.deleteImage);
exports.default = router;
