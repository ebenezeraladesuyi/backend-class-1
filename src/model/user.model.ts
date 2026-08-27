import mongoose, { Schema, type Document } from "mongoose";


export type userRole = "landlord" | "tenant"

export interface IUserAuth extends Document {
    email: string;
    password: string;
    termsAndCondition: boolean;
    role: userRole;

    isVerified: boolean,

    otp?: string;
    otpExpiresAt? : Date;

    resetPasswordOtp? : string,
    resetPasswordOtpExpiresAt: Date;

    createdAt: Date;
    updatedAt: Date;
}

const userAuthSchema = new Schema<IUserAuth>({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    termsAndCondition: {
        type: Boolean,
        required: [true, "Terms and condition is required"],
        validate: (value: boolean) => value === true,
        message: "You must accept the terms and conditions"
    },
    role: {
        type: String,
        enum:["landlord", "tenant"],
        required: [true, "role is required"],
    },

    isVerified: {
        type: Boolean,
        default: false,
    },

    otp: {
        type: String,
        select: false,
    },
    otpExpiresAt: {
        type: Date,
        select: false,
    },

    resetPasswordOtp: {
        type: String,
        select: false,
    },
    resetPasswordOtpExpiresAt: {
        type: Date,
        select: false,
    },
},
   {
    timestamps: true
   }
)

const userAuth = mongoose.model<IUserAuth>("userauth", userAuthSchema)

export default userAuth