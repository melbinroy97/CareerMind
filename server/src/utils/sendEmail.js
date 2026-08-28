import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (options) => {
    try {
        const data = await resend.emails.send({
            // Note: If you don't have a verified custom domain on Resend, 
            // you must use 'onboarding@resend.dev' and can only send emails to yourself.
            from: 'CareerMinds <onboarding@resend.dev>', 
            to: options.email,
            subject: options.subject,
            html: options.html,
        });

        console.log("Email sent successfully via Resend");
    } catch (error) {
        console.error("Error sending email via Resend:", error);
    }
};

export default sendEmail;
