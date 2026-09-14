import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    }
});
export const sendOtpToEmail = async (email, otp) => {
    await transporter.sendMail({
        from: `"Backend Class <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "Your Verification OTP",
        text: `Your Verification code is ${otp}. It expires in 15 minutes`,
        html: `
            <h2>Email Verification</h2>
            <p>Your Verification code is:</p>
            <h1>${otp}</h1>
            <p>This code expires in 15 minutes</p>
        `
    });
};
//# sourceMappingURL=mailer.js.map