import nodemailer from "nodemailer";


export async function sendMail({
  email,
  template,
  subject,
}: {
  email: string;
  name: string;
  message: string;
  subject: string;
  template: HTMLTemplateElement;
}) {

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    hdml: template,
  };

  await transport.sendMail(mailOptions);

}