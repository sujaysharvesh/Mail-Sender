import { sendMail } from "@/app/service/mail";
import { referalMail, referalSubject } from "@/app/template/referalMail";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {
      const { companyName, toName, toMail, position } = await request.json();
  
      if (!companyName || !toName || !toMail || !position) {
        return NextResponse.json(
          { error: "All fields are required" },
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
  
      const template = referalMail(toName, companyName, position);
      const subject = referalSubject(position, companyName);
  
      await sendMail({
        email: toMail,
        template: template,
        subject: subject,
      });
  
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
  }
