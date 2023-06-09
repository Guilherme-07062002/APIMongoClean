import mongoose, { Document, Schema } from 'mongoose';
import { User } from '../../../entities/User';

export interface UserDocument extends User, Document {
  name: string;
  email: string;
}

const UserSchema = new Schema<UserDocument>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model<UserDocument>('User', UserSchema);