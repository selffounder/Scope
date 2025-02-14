import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";



export async function POST(request: Request) {
  try {
    const { fullName, email, password, institution } = await request.json();

    if (!fullName || !email || !password) {
      return NextResponse.json({ message: "All required fields must be filled." }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: "Email is already registered." }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { fullName, email, password: hashedPassword, institution },
    });

    return NextResponse.json({ message: "User registered successfully!", user }, { status: 201 });
  } catch (error) {
    console.error("Error in registration:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
