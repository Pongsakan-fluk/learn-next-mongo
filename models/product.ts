import mongoose, { Schema } from "mongoose";

// Define the schema
const productSchema = new Schema(
  {
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
  },
  { timestamps: true }
);

// Create and export the model
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export { Product };
