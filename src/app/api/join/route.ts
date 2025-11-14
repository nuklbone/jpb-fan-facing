import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/resend";
import { welcomeEmailTemplate } from "@/lib/email-templates";
import { env } from "@/lib/env";
import { validateJoinForm } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, email, zip, sms } = body;

    // Validate form data
    const validation = validateJoinForm({ email, firstName, zip });
    if (!validation.valid) {
      return NextResponse.json(
        { error: "Validation failed", errors: validation.errors },
        { status: 400 }
      );
    }

    // TODO: Save to Supabase database
    // const supabase = createClient();
    // await supabase.from("members").insert({ ... });

    // Send welcome email
    if (env.resendApiKey) {
      try {
        await sendEmail({
          to: email,
          subject: "Welcome to the Inner Circle Crew! 🎵",
          html: welcomeEmailTemplate({
            firstName: firstName || "Fan",
            downloadLink: "#", // TODO: Generate actual download link
            merchCode: "WELCOME10",
          }),
        });
      } catch (emailError) {
        console.error("Failed to send welcome email:", emailError);
        // Continue even if email fails
      }
    }

    return NextResponse.json({
      success: true,
      message: "Welcome to the Inner Circle! Check your email for your welcome gift.",
    });
  } catch (error) {
    console.error("Join API error:", error);
    return NextResponse.json(
      { error: "Failed to process signup. Please try again." },
      { status: 500 }
    );
  }
}

