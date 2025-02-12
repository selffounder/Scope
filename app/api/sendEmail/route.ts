import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    
  try {
    const body = await request.json();
    const { name, email, institution } = body;

    if (!name || !email || !institution) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    if (!process.env.ICLOUD_USER || !process.env.ICLOUD_PASS) {
      throw new Error("Missing iCloud email configuration.");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.mail.me.com",
      port: 587,
      secure: false, 
      auth: {
        user: process.env.ICLOUD_USER,
        pass: process.env.ICLOUD_PASS,
      },
    });

    await transporter.sendMail({
      from: `"SignUp Form" <${process.env.ICLOUD_USER}>`,
      to: process.env.ICLOUD_USER,
      subject: "New Sign-Up Submission",
      text: `Name: ${name}\nEmail: ${email}\nInstitution: ${institution}`,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error: unknown) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Failed to send email." }, { status: 500 });
  }
}
