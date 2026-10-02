import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export const sendVerificationEmail = async (email, otp) => {
    const { data, error } = await resend.emails.send({
        // from: "Your App <onboarding@resend.dev>",
        from: "My Test App <ebenezeraladesuyi@gmail.com>",
        to: [email],
        subject: "Verify your account",
        html: `
      <h2>Welcome!</h2>
      <p>Your verification code is:</p>
      <h1>${otp}</h1>
      <p>This code expires soon.</p>
    `,
    });
    if (error) {
        console.error("Email sending failed:", error);
        throw new Error("Failed to send verification email");
    }
    return data;
};
//# sourceMappingURL=resendMailer.js.map