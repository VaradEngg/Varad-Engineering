import { NextResponse } from "next/server";
import { Resend } from "resend";
import { company } from "@/lib/company";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company: customerCompany, email, phone, requirement, message, hp_website } = body;

    // Honeypot spam trap: bots usually fill hidden fields
    if (hp_website) {
      return NextResponse.json({ success: true, message: "Enquiry submitted." }, { status: 200 });
    }

    // Server-side validation
    if (!name?.trim()) {
      return NextResponse.json({ error: "Full Name is required." }, { status: 400 });
    }
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    }
    if (!requirement?.trim()) {
      return NextResponse.json({ error: "Please select a requirement type." }, { status: 400 });
    }
    if (!message?.trim()) {
      return NextResponse.json({ error: "Requirement details / message is required." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[Contact API] Error: RESEND_API_KEY is not set in environment variables.");
      return NextResponse.json(
        {
          error: "Email delivery is not yet configured. Please add RESEND_API_KEY in .env.local, or contact Varad Engineering directly via phone at " + company.phone,
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const toEmail = process.env.CONTACT_RECEIVER_EMAIL || company.email || "info@varadengg.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Varad Engineering <onboarding@resend.dev>";
    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const emailSubject = `New Broach Enquiry: ${name} (${requirement})`;

    const textContent = `
New Customer Enquiry - Varad Engineering
=========================================
Submitted: ${submittedAt} (IST)

Lead Information:
- Name: ${name}
- Company: ${customerCompany || "Not specified"}
- Email: ${email}
- Phone: ${phone || "Not provided"}
- Requirement: ${requirement}

Requirement Details:
${message}
=========================================
Note: You can reply directly to this email to contact ${name} (${email}).
`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Customer Enquiry</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #1e293b;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 4px; overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background-color: #0b4267; padding: 24px 30px; text-align: left;">
              <div style="font-size: 11px; letter-spacing: 0.2em; color: #f59e0b; font-weight: 700; text-transform: uppercase;">
                Varad Engineering
              </div>
              <h1 style="margin: 6px 0 0 0; font-size: 22px; color: #ffffff; font-weight: 700;">
                New Broach &amp; Tooling Enquiry
              </h1>
              <div style="font-size: 12px; color: #cbd5e1; margin-top: 4px;">
                Broach Manufacturing Unit, Mhalunge, Chakan, Pune
              </div>
            </td>
          </tr>

          <!-- Notification Banner -->
          <tr>
            <td style="background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; padding: 14px 30px; font-size: 13px; color: #64748b;">
              Received on <strong style="color: #0f172a;">${submittedAt}</strong> via Website Contact Form
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 16px 0; font-size: 15px; text-transform: uppercase; letter-spacing: 0.05em; color: #0b4267; border-bottom: 2px solid #0b4267; padding-bottom: 6px;">
                Lead Information
              </h2>

              <table width="100%" border="0" cellspacing="0" cellpadding="8" style="font-size: 14px; margin-bottom: 24px;">
                <tr style="background-color: #f8fafc;">
                  <td width="30%" style="font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Full Name:</td>
                  <td width="70%" style="color: #0f172a; font-weight: 700; border-bottom: 1px solid #e2e8f0;">${name}</td>
                </tr>
                <tr>
                  <td style="font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Company / Firm:</td>
                  <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">${customerCompany ? customerCompany : '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Email Address:</td>
                  <td style="border-bottom: 1px solid #e2e8f0;">
                    <a href="mailto:${email}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Phone Number:</td>
                  <td style="border-bottom: 1px solid #e2e8f0;">
                    ${phone ? `<a href="tel:${phone}" style="color: #b45309; text-decoration: none; font-weight: 700;">${phone}</a>` : '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}
                  </td>
                </tr>
                <tr style="background-color: #fef3c7;">
                  <td style="font-weight: 700; color: #92400e; border-bottom: 1px solid #fde68a;">Requirement Type:</td>
                  <td style="color: #78350f; font-weight: 700; border-bottom: 1px solid #fde68a;">
                    ${requirement}
                  </td>
                </tr>
              </table>

              <h2 style="margin: 0 0 12px 0; font-size: 15px; text-transform: uppercase; letter-spacing: 0.05em; color: #0b4267; border-bottom: 2px solid #0b4267; padding-bottom: 6px;">
                Requirement Details / Message
              </h2>
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #0b4267; padding: 16px; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">
${message}
              </div>

              <!-- Action Callout -->
              <div style="margin-top: 28px; padding: 16px; background-color: #f0fdf4; border: 1px solid #bbf7d0; text-align: center;">
                <span style="font-size: 13px; color: #166534; font-weight: 600; display: block; margin-bottom: 10px;">
                  Direct Customer Response:
                </span>
                <a href="mailto:${email}?subject=${encodeURIComponent("Re: " + emailSubject)}" style="display: inline-block; background-color: #0b4267; color: #ffffff; padding: 10px 22px; font-size: 13px; font-weight: 700; text-decoration: none; border-radius: 2px;">
                  Reply to ${name} (${email})
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 18px 30px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #1e293b;">
              VARAD ENGINEERING &bull; Broach Manufacturing Unit &bull; Mhalunge, Chakan, Pune<br>
              Phone: ${company.phone} &bull; Domain: ${company.domain}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    const sendResult = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    if (sendResult.error) {
      console.error("[Contact API] Resend error:", sendResult.error);
      return NextResponse.json(
        { error: sendResult.error.message || "Failed to deliver email through Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been dispatched successfully! Our team will contact you shortly.",
        id: sendResult.data?.id,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[Contact API] Unexpected error:", err);
    const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
