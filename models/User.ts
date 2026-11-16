import { Schema, model } from 'mongoose';

// 1. Define a TypeScript interface for type safety
interface IUser {
    name: string;
    email: string;
    age?: number;
    isActive: boolean;
    createdAt: Date;
}

// 2. Define the Mongoose schema (the blueprint)
const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
    },
    age: {
        type: Number,
        min: [0, 'Age cannot be negative'],
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// 3. Create and export the Model
const User = model<IUser>('User', userSchema);
export default User;