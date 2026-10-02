import { BrevoClient } from "@getbrevo/brevo";
const brevo = new BrevoClient({
    apiKey: process.env.BREVO_API_KEY,
});
export const sendEmail = async ({ to, subject, htmlContent, }) => {
    try {
        const response = await brevo.transactionalEmails.sendTransacEmail({
            sender: {
                email: process.env.BREVO_SENDER_EMAIL,
                name: process.env.BREVO_SENDER_NAME || "My App",
            },
            to: [
                {
                    email: to,
                },
            ],
            subject,
            htmlContent,
        });
        console.log("Email sent:", response);
        // return response;
    }
    catch (error) {
        console.error("Brevo email error:", error);
        throw error;
    }
};
//# sourceMappingURL=brevoService.js.map