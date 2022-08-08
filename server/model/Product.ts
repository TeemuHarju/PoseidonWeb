import { Schema, model } from 'mongoose';

// Create an interface representing a document in MongoDB.
interface IProduct {
    name: string;
    price: string;
  }
  
  // Create a Schema corresponding to the document interface.
  const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    price: { type: String, required: true }
  });

  const Product = model<IProduct>('Product', productSchema);
  module.exports = Product;