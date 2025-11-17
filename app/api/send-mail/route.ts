import { sendMail } from "@/app/service/mail";
import { referalMail, referalSubject } from "@/app/template/referalMail";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {

    const { companyName, toName, toMail, position } = await request.json();

    const template = referalMail(toName, companyName, position);

    const subject = referalSubject(position, companyName);

    await sendMail(toMail, template, subject);

    if (!companyName || !toName || !toMail || !position) {
      return NextResponse.json(
        { error: "All failed are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(toMail)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },



    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Failed to send email", { status: 500 });
  }
}
