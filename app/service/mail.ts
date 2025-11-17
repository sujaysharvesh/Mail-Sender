import nodemailer from "nodemailer"; 


export async function sendMail({
  email,
  template,
  subject,
}: {
  email: string;
  template: string;
  subject: string;
}) {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    html: template,

    attachments: [
      {
        filename: "SujaySharvesh.pdf",
        path: "./public/resume/SujaySharvesh.pdf",
        contentType: "application/pdf",
      },
    ],
  };

  await transport.sendMail(mailOptions);
}
