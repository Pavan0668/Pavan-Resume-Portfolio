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

        // Send notification email to the company
        await transporter.sendMail({
            from: `"JKC Solutions Website" <${fromEmail}>`,
            to: mailTo,
            subject: "🎉 New Newsletter Subscription",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc; border-radius: 12px;">
                    <div style="text-align: center; margin-bottom: 24px;">
                        <img src="https://your-domain.com/logo.png" alt="JKC Solutions" style="height: 48px; border-radius: 8px;" />
                        <h1 style="color: #0f172a; margin: 16px 0 4px; font-size: 28px;">New Newsletter Subscription</h1>
                        <p style="color: #64748b; margin: 0; font-size: 14px;">A visitor has subscribed to your newsletter</p>
                    </div>
                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; margin-bottom: 16px;">
                        <h2 style="color: #0f172a; font-size: 18px; margin: 0 0 16px; border-bottom: 2px solid #6366f1; padding-bottom: 8px;">📧 Subscriber Email</h2>
                        <p style="font-size: 20px; font-weight: bold; color: #4f46e5; margin: 0;">${email}</p>
                    </div>
                    <div style="background: #eef2ff; border-left: 4px solid #6366f1; border-radius: 4px; padding: 16px; margin-bottom: 16px;">
                        <p style="color: #0f172a; margin: 0; font-size: 14px; line-height: 1.6;">
                            <strong>📅 Subscribed on:</strong> ${new Date().toLocaleString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                            })}<br />
                            <strong>🌐 Source:</strong> Website Footer Newsletter Form
                        </p>
                    </div>
                    <div style="text-align: center; background: #6366f1; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                        <p style="color: #ffffff; margin: 0; font-size: 14px; font-weight: bold;">
                            ✨ This subscriber will receive your latest IT & AI insights
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

        // Send confirmation email to the subscriber
        await transporter.sendMail({
            from: `"JKC Solutions" <${fromEmail}>`,
            to: email,
            subject: "🎉 Welcome to JKC Solutions Newsletter!",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc; border-radius: 12px;">
                    <div style="text-align: center; margin-bottom: 24px;">
                        <img src="https://your-domain.com/logo.png" alt="JKC Solutions" style="height: 48px; border-radius: 8px;" />
                        <h1 style="color: #0f172a; margin: 16px 0 4px; font-size: 28px;">Welcome Aboard! 🚀</h1>
                    </div>
                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; margin-bottom: 16px;">
                        <p style="color: #0f172a; font-size: 16px; line-height: 1.7; margin: 0 0 16px;">
                            Hi there,
                        </p>
                        <p style="color: #0f172a; font-size: 16px; line-height: 1.7; margin: 0 0 16px;">
                            Thank you for subscribing to the <strong>JKC Solutions newsletter</strong>! You're now part of a community 
                            that stays ahead with the latest in <strong>IT infrastructure, cloud solutions, cybersecurity,</strong> 
                            and <strong>AI automation</strong>.
                        </p>
                        <div style="background: #eef2ff; border-left: 4px solid #6366f1; border-radius: 4px; padding: 16px; margin: 16px 0;">
                            <p style="color: #0f172a; margin: 0; font-size: 14px; line-height: 1.6;">
                                <strong>✨ What to expect:</strong><br />
                                • Latest technology trends & insights<br />
                                • Exclusive case studies & best practices<br />
                                • Updates on new services & offerings<br />
                                • Special offers for subscribers
                            </p>
                        </div>
                    </div>
                    <div style="text-align: center; margin-bottom: 16px;">
                        <a href="https://your-domain.com" style="background: #6366f1; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
                            Explore Our Services
                        </a>
                    </div>
                    <p style="text-align: center; color: #94a3b8; font-size: 12px; margin: 20px 0 4px;">
                        You're receiving this email because you subscribed to the JKC Solutions newsletter.
                    </p>
                    <p style="text-align: center; color: #94a3b8; font-size: 12px; margin: 4px 0 0;">
                        © ${new Date().getFullYear()} JK Computers. All rights reserved.
                    </p>
                </div>
            `,
        });

        return NextResponse.json(
            { success: true, message: "Subscription successful! Check your inbox to confirm." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Newsletter subscription error:", error);
        const errorMessage = error instanceof Error 
            ? `Failed to send email: ${error.message}`
            : "Failed to process subscription";

        // Check for SMTP auth errors specifically
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