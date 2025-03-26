import mongoose, { Schema, Document } from 'mongoose';

export interface IGalleryItem extends Document {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const GalleryItemSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
  tags: { type: [String], default: [] },
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Create or retrieve the model
const GalleryItem = mongoose.models.GalleryItem || mongoose.model<IGalleryItem>('GalleryItem', GalleryItemSchema);

export default GalleryItem;