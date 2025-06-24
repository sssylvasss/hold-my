"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImage = exports.processImage = exports.getImage = exports.uploadImage = void 0;
const Image_1 = __importDefault(require("../models/Image"));
const path_1 = __importDefault(require("path"));
const uploadImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        const image = new Image_1.default({
            originalUrl: `/uploads/${file.filename}`,
            processedUrl: `/uploads/${file.filename}`, // Will be updated after processing
            metadata: {
                width: 0, // Will be updated after processing
                height: 0,
                format: path_1.default.extname(file.originalname).substring(1),
            },
        });
        yield image.save();
        res.status(201).json(image);
    }
    catch (error) {
        console.error("Error uploading image:", error);
        res.status(500).json({ message: "Error uploading image", error });
    }
});
exports.uploadImage = uploadImage;
const getImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const image = yield Image_1.default.findById(req.params.id);
        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }
        res.json(image);
    }
    catch (error) {
        console.error("Error fetching image:", error);
        res.status(500).json({ message: "Error fetching image", error });
    }
});
exports.getImage = getImage;
const processImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const image = yield Image_1.default.findById(req.params.id);
        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }
        // TODO: Implement image processing logic
        // This is where we'll add the beer to the image using Sharp or Canvas
        res.json(image);
    }
    catch (error) {
        console.error("Error processing image:", error);
        res.status(500).json({ message: "Error processing image", error });
    }
});
exports.processImage = processImage;
const deleteImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const image = yield Image_1.default.findByIdAndDelete(req.params.id);
        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }
        // TODO: Delete actual image files from uploads directory
        res.json({ message: "Image deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting image:", error);
        res.status(500).json({ message: "Error deleting image", error });
    }
});
exports.deleteImage = deleteImage;
