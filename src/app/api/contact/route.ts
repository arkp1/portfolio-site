import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { firstName, lastName, email, message } = await req.json()

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${firstName} ${lastName}`,
      text: message,
      html: `
        <p><strong>From:</strong> ${firstName} ${lastName} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Email sending error:", err)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}
