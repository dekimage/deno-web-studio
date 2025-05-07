import { Resend } from "resend";
import { NextResponse } from "next/server";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Send email to yourself
    await resend.emails.send({
      from: "Deno Web Studio <onboarding@resend.dev>",
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission - Deno Web Studio",
      text: `
New Contact Form Submission:

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
      `,
    });

    // Send confirmation email to the user
    await resend.emails.send({
      from: "Deno Web Studio <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for contacting Deno Web Studio",
      text: `
Hi ${name},

Thank you for reaching out to Deno Web Studio! I've received your message and will review it within 24 hours.

If you haven't provided all the details about your project, don't worry - I'll follow up with specific questions to better understand your needs.

Best regards,
Deno Web Studio
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}
