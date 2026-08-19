import mongoose, { Schema } from "mongoose";

export interface IUser extends Document {
    // _id: string;
    email: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    // _id: {
    //     type: String,
    // },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    }
);

const userModel = mongoose.model<IUser>("User", userSchema);

export default userModel;