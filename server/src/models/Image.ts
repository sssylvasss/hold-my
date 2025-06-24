import mongoose, { Document, Schema } from "mongoose";

export interface IImage extends Document {
  originalUrl: string;
  processedUrl: string;
  createdAt: Date;
  userId?: string; // For future authentication
  metadata?: {
    width: number;
    height: number;
    format: string;
  };
}

const ImageSchema: Schema = new Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  processedUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
  },
  metadata: {
    width: Number,
    height: Number,
    format: String,
  },
});

export default mongoose.model<IImage>("Image", ImageSchema);
