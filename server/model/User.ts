import { Schema, model } from 'mongoose';

// Create an interface representing a document in MongoDB.
interface IUser {
    name: string;
    email: string;
    avatar?: string;
  }
  
  // Create a Schema corresponding to the document interface.
  const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String
  });

  const User = model<IUser>('User', userSchema);
  module.exports = User;