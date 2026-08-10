import mongoose, { Schema } from "mongoose";
import { timeStamp } from "node:console";

export interface iProfile extends Document {
    name: string;
    email: string;
    age: number;
    country: string;
    createdAt: Date
}

const profileSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const profileModel = mongoose.model<iProfile>("user", profileSchema)

export default profileModel;