import mongoose, { Document } from 'mongoose';
import { User } from '../../../entities/User';

// Define a schema
const Schema = mongoose.Schema;

export interface UserDocument extends User, Document {}

const UserSchema = new Schema<UserDocument>({
    name: String,
    email: String
});

// Compile model from schema
const userModel = mongoose.model<UserDocument>('UserModel', UserSchema, 'alunos');

export default userModel;
