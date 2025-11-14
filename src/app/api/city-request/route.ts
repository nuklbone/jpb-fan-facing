import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/resend";
import { env } from "@/lib/env";
import { validateCityRequest, sanitizeString } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, city, venue, why, email } = body;

    // Validate form data
    const validation = validateCityRequest({
      cityName: name,
      city,
      email,
    });
    if (!validation.valid) {
      return NextResponse.json(
        { error: "Validation failed", errors: validation.errors },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeString(name);
    const sanitizedCity = sanitizeString(city);
    const sanitizedVenue = venue ? sanitizeString(venue) : "";
    const sanitizedWhy = why ? sanitizeString(why) : "";

    // Send notification email to admin
    if (env.resendApiKey && env.adminEmail) {
      try {
        await sendEmail({
          to: env.adminEmail,
          subject: `City Request: ${city}`,
          html: `
            <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; background: #f9fafb; color: #111827; padding: 32px 0;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0;">
                    <tr>
                      <td style="padding: 24px;">
                        <h2 style="margin: 0 0 16px; font-size: 22px; color: #1d4ed8;">New City Request</h2>
                <p style="margin: 0 0 12px; font-size: 16px;"><strong>Name:</strong> ${sanitizedName}</p>
                <p style="margin: 0 0 12px; font-size: 16px;"><strong>City:</strong> ${sanitizedCity}</p>
                ${sanitizedVenue ? `<p style="margin: 0 0 12px; font-size: 16px;"><strong>Venue:</strong> ${sanitizedVenue}</p>` : ""}
                ${sanitizedWhy ? `<p style="margin: 0 0 8px; font-size: 16px;"><strong>Why This Matters:</strong></p><p style="margin: 0; font-size: 16px; line-height: 1.6; white-space: pre-line;">${sanitizedWhy}</p>` : ""}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send city request email:", emailError);
      }
    }

    // Send confirmation email to user
    if (env.resendApiKey && email) {
      try {
        await sendEmail({
          to: email,
          subject: "We Got Your City Request! | James Pitts Band",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2>Thanks for the request, ${sanitizedName}!</h2>
              <p>We've received your request for a show in <strong>${sanitizedCity}</strong> and we'll keep it in mind for future tours.</p>
              <p>Follow us on social media and join the Inner Circle to be first to know when we announce new dates!</p>
              <p>– The James Pitts Band Crew</p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
      }
    }

    // TODO: Save to Supabase database
    // const supabase = createClient();
    // await supabase.from("city_requests").insert({ ... });

    return NextResponse.json({
      success: true,
      message: `Thanks for the request! We'll keep ${sanitizedCity} in mind for future tours.`,
    });
  } catch (error) {
    console.error("City request API error:", error);
    return NextResponse.json(
      { error: "Failed to submit request. Please try again." },
      { status: 500 }
    );
  }
}

