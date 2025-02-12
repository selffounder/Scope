import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, institution } = await request.json();

  let transporter = nodemailer.createTransport({
    host: "smtp.mail.me.com",          // iCloud SMTP server
    port: 587,                         // Port for TLS (STARTTLS)
    secure: false,                     // Use TLS (not SSL)
    auth: {
      user: "webuildscope@icloud.com",  // Your iCloud email
      pass: "jvlw-wicf-fzam-mrnt",    // The app-specific password you generated
    },
  });

  try {
    await transporter.sendMail({
      from: `"SignUp Form" <webuildscope@icloud.com>`, 
      to: "webuildscope@icloud.com",                   
      subject: "New Sign-Up Submission",
      text: `Name: ${name}\nEmail: ${email}\nInstitution: ${institution}`,
    });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
