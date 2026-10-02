interface SendEmailParams {
    to: string;
    subject: string;
    htmlContent: string;
}
export declare const sendEmail: ({ to, subject, htmlContent, }: SendEmailParams) => Promise<void>;
export {};
//# sourceMappingURL=brevoService.d.ts.map