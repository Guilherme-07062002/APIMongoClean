import mongoose, { Document } from 'mongoose';
import { User } from '../../../entities/User';

const Schema = mongoose.Schema;

export interface UserDocument extends User, Document {}

const UserSchema = new Schema<UserDocument>({
    name: String,
    email: String
});

const userModel = mongoose.model<UserDocument>('UserModel', UserSchema, 'alunos');

export default userModel;
