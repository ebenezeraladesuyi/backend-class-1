import { sendEmail } from "./brevoService.js";


export const sendOtpEmail = async (
  email: string,
  otp: string
) => {
  return sendEmail({
    to: email,

    subject: "Verify your account",

    htmlContent: `
      <!DOCTYPE html>
      <html>
        <body>
          <h2>Verify Your Account</h2>

          <p>Hello,</p>

          <p>
            Thank you for signing up.
            Use the verification code below to verify your account:
          </p>

          <h1>${otp}</h1>

          <p>
            This code will expire in 10 mins.
          </p>

          <p>
            If you did not create this account,
            you can ignore this email.
          </p>
        </body>
      </html>
    `,
  });
};