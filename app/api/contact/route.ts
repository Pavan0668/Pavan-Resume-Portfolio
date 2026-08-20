import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, company, service, subject, message } = body;

        // Validate required fields
        if (!name || typeof name !== "string" || name.trim().length < 2) {
            return NextResponse.json(
                { error: "Name is required (at least 2 characters)" },
                { status: 400 }
            );
        }

        if (!email || typeof email !== "string") {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Please enter a valid email address" },
                { status: 400 }
            );
        }

        if (!message || typeof message !== "string" || message.trim().length < 10) {
            return NextResponse.json(
                { error: "Message is required (at least 10 characters)" },
                { status: 400 }
            );
        }

        // Configure SMTP transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: parseInt(process.env.SMTP_PORT || "587", 10),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailTo = process.env.MAIL_TO || process.env.SMTP_USER;
        const fromEmail = process.env.SMTP_USER || "jkcsolutions1@gmail.com";
        const serviceLabel = service || subject || "General Inquiry";
        const companyName = company || "Not provided";
        const phoneNumber = phone || "Not provided";

        // Build enquiry details for email
        const enquiryDetails = `
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; margin-bottom: 16px;">
                <h2 style="color: #0f172a; font-size: 18px; margin: 0 0 16px; border-bottom: 2px solid #6366f1; padding-bottom: 8px;">📋 Enquiry Details</h2>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr>
                        <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: bold;">👤 Name:</td>
                        <td style="padding: 8px 0; color: #0f172a;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: bold;">📧 Email:</td>
                        <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: bold;">📞 Phone:</td>
                        <td style="padding: 8px 0; color: #0f172a;">${phoneNumber}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: bold;">🏢 Company:</td>
                        <td style="padding: 8px 0; color: #0f172a;">${companyName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: bold;">🔧 Service:</td>
                        <td style="padding: 8px 0; color: #0f172a;">${serviceLabel}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: bold;">📅 Date:</td>
                        <td style="padding: 8px 0; color: #0f172a;">${new Date().toLocaleString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                        })}</td>
                    </tr>
                </table>
            </div>
            <div style="background: #eef2ff; border-left: 4px solid #6366f1; border-radius: 4px; padding: 16px; margin-bottom: 16px;">
                <h3 style="color: #0f172a; font-size: 16px; margin: 0 0 8px;">💬 Message:</h3>
                <p style="color: #0f172a; margin: 0; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
        `;

        // Send notification email to the admin/company
        await transporter.sendMail({
            from: `"JKC Solutions Website" <${fromEmail}>`,
            to: mailTo,
            replyTo: email,
            subject: `📩 New Enquiry from ${name} - ${serviceLabel}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc; border-radius: 12px;">
                    <div style="text-align: center; margin-bottom: 24px;">
                        <img src="https://your-domain.com/logo.png" alt="JKC Solutions" style="height: 48px; border-radius: 8px;" />
                        <h1 style="color: #0f172a; margin: 16px 0 4px; font-size: 28px;">New Contact Enquiry</h1>
                        <p style="color: #64748b; margin: 0; font-size: 14px;">A potential client has submitted an enquiry through the website</p>
                    </div>
                    ${enquiryDetails}
                    <div style="text-align: center; background: #6366f1; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                        <p style="color: #ffffff; margin: 0; font-size: 14px; font-weight: bold;">
                            ⚡ Action Required: Please respond to this enquiry within 24 hours
                        </p>
                    </div>
                    <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">
                        This notification was sent automatically from the JKC Solutions website.
                    </p>
                    <p style="text-align: center; color: #94a3b8; font-size: 12px; margin: 4px 0 0;">
                        © ${new Date().getFullYear()} JK Computers. All rights reserved.
                    </p>
                </div>
            `,
        });

        // Send confirmation email to the client
        await transporter.sendMail({
            from: `"JKC Solutions" <${fromEmail}>`,
            to: email,
            subject: "✅ We've Received Your Enquiry - JKC Solutions",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc; border-radius: 12px;">
                    <div style="text-align: center; margin-bottom: 24px;">
                        <img src="https://your-domain.com/logo.png" alt="JKC Solutions" style="height: 48px; border-radius: 8px;" />
                        <h1 style="color: #0f172a; margin: 16px 0 4px; font-size: 28px;">Thank You, ${name}! 🙏</h1>
                        <p style="color: #64748b; margin: 0; font-size: 14px;">We've received your enquiry and will get back to you shortly</p>
                    </div>
                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; margin-bottom: 16px;">
                        <p style="color: #0f172a; font-size: 16px; line-height: 1.7; margin: 0 0 16px;">
                            Hi ${name},
                        </p>
                        <p style="color: #0f172a; font-size: 16px; line-height: 1.7; margin: 0 0 16px;">
                            Thank you for reaching out to <strong>JKC Solutions</strong>. We have received your enquiry regarding 
                            <strong>${serviceLabel}</strong> and our team will review it shortly.
                        </p>
                        <div style="background: #eef2ff; border-left: 4px solid #6366f1; border-radius: 4px; padding: 16px; margin: 16px 0;">
                            <p style="color: #0f172a; margin: 0; font-size: 14px; line-height: 1.6;">
                                <strong>📋 Your enquiry summary:</strong><br />
                                • <strong>Service:</strong> ${serviceLabel}<br />
                                • <strong>Company:</strong> ${companyName}<br />
                                • <strong>Phone:</strong> ${phoneNumber}<br />
                                • <strong>Message:</strong> ${message}
                            </p>
                        </div>
                        <p style="color: #0f172a; font-size: 16px; line-height: 1.7; margin: 0;">
                            Our team typically responds within <strong>24 hours</strong> during business days (Mon-Sat, 9AM-7PM IST).
                        </p>
                    </div>
                    <div style="text-align: center; margin-bottom: 16px;">
                        <a href="https://your-domain.com" style="background: #6366f1; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
                            Explore Our Services
                        </a>
                    </div>
                    <p style="text-align: center; color: #94a3b8; font-size: 12px; margin: 20px 0 4px;">
                        You're receiving this email because you submitted an enquiry on the JKC Solutions website.
                    </p>
                    <p style="text-align: center; color: #94a3b8; font-size: 12px; margin: 4px 0 0;">
                        © ${new Date().getFullYear()} JK Computers. All rights reserved.
                    </p>
                </div>
            `,
        });

        return NextResponse.json(
            { success: true, message: "Your enquiry has been sent! We'll get back to you within 24 hours." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        const errorMessage = error instanceof Error
            ? `Failed to send email: ${error.message}`
            : "Failed to process your enquiry";

        const smtpError = error instanceof Error ? error.message : "";
        if (smtpError.includes("Invalid login") || smtpError.includes("bad username/password")) {
            return NextResponse.json(
                { error: "SMTP authentication failed. Please check your email credentials." },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}