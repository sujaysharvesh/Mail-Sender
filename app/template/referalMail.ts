



export const referalSubject = (position: string, companyName: string) => {
    return `Referral Request for ${position} Position at ${companyName}`;
  };
  

  export const referalMail = (
    name: string,
    companyName: string,
    position: string
  ) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Referral Request</title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; margin: 0;">
          <div style="max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">Hello ${name},</h2>
            
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              I hope this message finds you well. I'm reaching out to express my strong interest in the <strong>${position}</strong> position at <strong>${companyName}</strong>.
            </p>
            
            <div style="margin: 30px 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; text-align: center;">
              <p style="color: white; font-size: 18px; margin: 0 0 10px 0;">Position of Interest:</p>
              <p style="font-size: 26px; color: white; font-weight: bold; margin: 0;">${position}</p>
              <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin: 10px 0 0 0;">${companyName}</p>
            </div>
            
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              I believe my skills and experience would be a great fit for this role, and I would be incredibly grateful if you could provide a referral or connect me with the hiring team.
            </p>
            
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              I've attached my resume and would be happy to discuss my qualifications further at your convenience.
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="color: #555; font-size: 16px; margin: 5px 0;">
                Thank you for your time and consideration,
              </p>
              <p style="color: #333; font-size: 16px; font-weight: bold; margin: 5px 0;">
                Best regards
              </p>
            </div>
          </div>
          
          <div style="max-width: 600px; margin: 20px auto 0; text-align: center;">
            <p style="color: #999; font-size: 12px;">
              This is an automated referral request email.
            </p>
          </div>
        </body>
      </html>
    `;
  };