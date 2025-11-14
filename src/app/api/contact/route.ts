import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/resend";
import { contactFormEmailTemplate } from "@/lib/email-templates";
import { env } from "@/lib/env";
import { validateContactForm, sanitizeString } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, topic } = body;

    // Validate form data
    const validation = validateContactForm({ name, email, message });
    if (!validation.valid) {
      return NextResponse.json(
        { error: "Validation failed", errors: validation.errors },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeString(name);
    const sanitizedMessage = sanitizeString(message);

    // Send notification email to admin
    if (env.resendApiKey && env.adminEmail) {
      try {
        await sendEmail({
          to: env.adminEmail,
          subject: `New Contact Form Submission: ${topic || "General Inquiry"}`,
          html: contactFormEmailTemplate({
            name: sanitizedName,
            email,
            message: sanitizedMessage,
            topic: topic || "General Inquiry",
          }),
        });
      } catch (emailError) {
        console.error("Failed to send contact email:", emailError);
      }
    }

    // Send confirmation email to user
    if (env.resendApiKey) {
      try {
        await sendEmail({
          to: email,
          subject: "We Got Your Message | James Pitts Band",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2>Thanks for reaching out, ${sanitizedName}!</h2>
              <p>We received your message and will get back to you within a week—faster when we're off the road.</p>
              <p>Thanks for keeping the groove alive!</p>
              <p>– The James Pitts Band Crew</p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thanks for reaching out! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

