import { NextRequest, NextResponse } from "next/server";
import { createSmtpTransporter, getSmtpConfig, getSmtpConfigError } from "@/lib/mailer";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email } = body;

        // Validate email
        if (!email || typeof email !== "string") {
            return NextResponse.json(
                { error: "Work email is required" },
                { status: 400 }
            );
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Please enter a valid work email address" },
                { status: 400 }
            );
        }

        // Configure SMTP transporter using shared mailer utility
        const smtpConfig = getSmtpConfig();
        if (!smtpConfig) {
            return NextResponse.json(
                { error: getSmtpConfigError() },
                { status: 500 }
            );
        }

        const transporter = createSmtpTransporter();
        if (!transporter) {
            return NextResponse.json(
                { error: getSmtpConfigError() },
                { status: 500 }
            );
        }

        const mailTo = smtpConfig.mailTo;
        const fromEmail = smtpConfig.fromEmail;

        // Send notification email to the admin/company
        await transporter.sendMail({
            from: `"JKC Solutions Website" <${fromEmail}>`,
            to: mailTo,
            replyTo: email,
            subject: "📅 New Consultation Request Received",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc; border-radius: 12px;">
                    <div style="text-align: center; margin-bottom: 24px;">
                        <img src="https://your-domain.com/logo.png" alt="JKC Solutions" style="height: 48px; border-radius: 8px;" />
                        <h1 style="color: #0f172a; margin: 16px 0 4px; font-size: 28px;">New Consultation Request</h1>
                        <p style="color: #64748b; margin: 0; font-size: 14px;">A potential client is requesting a free consultation</p>
                    </div>
                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; margin-bottom: 16px;">
                        <h2 style="color: #0f172a; font-size: 18px; margin: 0 0 16px; border-bottom: 2px solid #6366f1; padding-bottom: 8px;">📋 Consultation Details</h2>
                        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: bold;">📧 Work Email:</td>
                                <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: bold;">📅 Requested On:</td>
                                <td style="padding: 8px 0; color: #0f172a;">${new Date().toLocaleString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: bold;">🌐 Source:</td>
                                <td style="padding: 8px 0; color: #0f172a;">Homepage - Ready to Automate Section</td>
                            </tr>
                        </table>
                    </div>
                    <div style="background: #eef2ff; border-left: 4px solid #6366f1; border-radius: 4px; padding: 16px; margin-bottom: 16px;">
                        <p style="color: #0f172a; margin: 0; font-size: 14px; line-height: 1.6;">
                            <strong>⚡ Action Required:</strong> Please reach out to this potential client to schedule their consultation within 24 hours. They are interested in our IT, AI, and automation services.
                        </p>
                    </div>
                    <div style="text-align: center; background: #6366f1; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                        <p style="color: #ffffff; margin: 0; font-size: 14px; font-weight: bold;">
                            ✨ Respond promptly to convert this lead
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
            subject: "📅 Consultation Request Received - JKC Solutions",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc; border-radius: 12px;">
                    <div style="text-align: center; margin-bottom: 24px;">
                        <img src="https://your-domain.com/logo.png" alt="JKC Solutions" style="height: 48px; border-radius: 8px;" />
                        <h1 style="color: #0f172a; margin: 16px 0 4px; font-size: 28px;">Thank You for Your Interest! 🙏</h1>
                        <p style="color: #64748b; margin: 0; font-size: 14px;">We've received your consultation request</p>
                    </div>
                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; margin-bottom: 16px;">
                        <p style="color: #0f172a; font-size: 16px; line-height: 1.7; margin: 0 0 16px;">
                            Hi there,
                        </p>
                        <p style="color: #0f172a; font-size: 16px; line-height: 1.7; margin: 0 0 16px;">
                            Thank you for requesting a consultation with <strong>JKC Solutions</strong>. Our team of experts specializing in 
                            <strong>IT infrastructure, cloud solutions, AI automation,</strong> and <strong>LLM fine-tuning</strong> 
                            will review your request and get back to you shortly.
                        </p>
                        <div style="background: #eef2ff; border-left: 4px solid #6366f1; border-radius: 4px; padding: 16px; margin: 16px 0;">
                            <p style="color: #0f172a; margin: 0; font-size: 14px; line-height: 1.6;">
                                <strong>📧 Email received:</strong> ${email}<br />
                                <strong>📅 Requested on:</strong> ${new Date().toLocaleString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </p>
                        </div>
                        <p style="color: #0f172a; font-size: 16px; line-height: 1.7; margin: 0;">
                            Our team will reach out to you within <strong>24 hours</strong> during business days (Mon-Sat, 9AM-7PM IST) 
                            to schedule your free consultation.
                        </p>
                    </div>
                    <div style="text-align: center; margin-bottom: 16px;">
                        <a href="https://your-domain.com/expertise" style="background: #6366f1; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
                            Explore Our Services
                        </a>
                    </div>
                    <p style="text-align: center; color: #94a3b8; font-size: 12px; margin: 20px 0 4px;">
                        You're receiving this email because you requested a consultation on the JKC Solutions website.
                    </p>
                    <p style="text-align: center; color: #94a3b8; font-size: 12px; margin: 4px 0 0;">
                        © ${new Date().getFullYear()} JK Computers. All rights reserved.
                    </p>
                </div>
            `,
        });

        return NextResponse.json(
            { success: true, message: "Consultation request sent! We'll contact you within 24 hours." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Consultation request error:", error);
        const errorMessage = error instanceof Error
            ? `Failed to send email: ${error.message}`
            : "Failed to process consultation request";

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