import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

export interface SmtpConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  mailTo: string;
  fromEmail: string;
}

/**
 * Centralized SMTP configuration.
 * Reads credentials from environment variables.
 * These MUST be set in the deployment environment (e.g. Vercel env vars).
 * Never commit actual credentials to the repository - use .env.example for documentation.
 */
export function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST;
  const portStr = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const mailTo = process.env.MAIL_TO;
  const fromEmail = process.env.SMTP_USER;

  // If any required env is missing, return null so callers can show a friendly error
  if (!host || !portStr || !user || !pass) {
    return null;
  }

  const port = parseInt(portStr, 10);
  if (isNaN(port)) {
    return null;
  }

  return {
    host,
    port,
    secure: port === 465,
    user,
    pass,
    mailTo: mailTo || user,
    fromEmail: fromEmail || user,
  };
}

/**
 * Creates a configured nodemailer transporter.
 * Returns null if SMTP configuration is not available.
 */
export function createSmtpTransporter(): Transporter | null {
  const config = getSmtpConfig();
  if (!config) return null;

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });
}

/**
 * Generates a friendly error message when SMTP is not configured.
 */
export function getSmtpConfigError(): string {
  return "Email service is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASSWORD environment variables in your deployment platform.";
}

/**
 * Validates that SMTP is configured and returns the config or throws a descriptive error.
 * Used by API routes to fail fast with a clear message.
 */
export function requireSmtpConfig(): SmtpConfig {
  const config = getSmtpConfig();
  if (!config) {
    throw new Error(
      "SMTP is not configured. Set the SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASSWORD environment variables. For local development, copy .env.example to .env.local and fill in your credentials."
    );
  }
  return config;
}