


export const referalSubject = (position: String, companyName: String) => {
    return `Referral Code for ${position} at ${companyName}`;
}


export const referalMail = (name: string, referalCode: string, position: String) => {
    return `
        <html>
        <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
            <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333;">Hello ${name},</h2>
            <p style="color: #555; font-size: 16px;">
                We're excited to have you on board! As a token of our appreciation, we're giving you a special referral code that you can share with your friends and family.
            </p>
            <div style="margin: 20px 0; padding: 15px; background-color: #f0f0f0; border-radius: 5px; text-align: center;">
                <strong style="font-size: 18px; color: #222;">Your Referral Code:</strong>
                <p style="font-size: 24px; color: #007BFF; margin: 10px 0;">${referalCode}</p>
            </div>
            <p style="color: #555; font-size: 16px;">
                Share this code with others to enjoy exclusive benefits together!
            </p>
            <p style="color: #555; font-size: 16px;">
                Best regards,<br/>
                The Team
            </p>
            </div>
        </body>
        </html>
    `;
}