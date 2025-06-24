import { Request, Response } from "express";
import Image, { IImage } from "../models/Image";
import path from "path";

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

export const uploadImage = async (req: Request, res: Response) => {
  try {
    const file = (req as MulterRequest).file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const image = new Image({
      originalUrl: `/uploads/${file.filename}`,
      processedUrl: `/uploads/${file.filename}`, // Will be updated after processing
      metadata: {
        width: 0, // Will be updated after processing
        height: 0,
        format: path.extname(file.originalname).substring(1),
      },
    });

    await image.save();
    res.status(201).json(image);
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ message: "Error uploading image", error });
  }
};

export const getImage = async (req: Request, res: Response) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.json(image);
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({ message: "Error fetching image", error });
  }
};

export const processImage = async (req: Request, res: Response) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    // TODO: Implement image processing logic
    // This is where we'll add the beer to the image using Sharp or Canvas

    res.json(image);
  } catch (error) {
    console.error("Error processing image:", error);
    res.status(500).json({ message: "Error processing image", error });
  }
};

export const deleteImage = async (req: Request, res: Response) => {
  try {
    const image = await Image.findByIdAndDelete(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    // TODO: Delete actual image files from uploads directory
    res.json({ message: "Image deleted successfully" });
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({ message: "Error deleting image", error });
  }
};
