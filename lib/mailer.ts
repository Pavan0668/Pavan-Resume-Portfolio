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
 * Returns the list of required SMTP environment variables that are currently
 * missing from the runtime environment. Used to produce helpful, specific
 * error messages for deployment troubleshooting (e.g. on Vercel or GitHub).
 */
export function getMissingSmtpEnvVars(): string[] {
  const requiredVars: Record<string, string | undefined> = {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  };

  const missing: string[] = [];
  for (const [name, value] of Object.entries(requiredVars)) {
    if (!value) {
      missing.push(name);
    }
  }
  return missing;
}

/**
 * Generates a friendly error message when SMTP is not configured.
 * When any variable is missing, it names the specific ones so the issue is
 * easy to diagnose on the deployment platform (e.g. Vercel).
 */
export function getSmtpConfigError(missingVars?: string[]): string {
  const missing = missingVars ?? getMissingSmtpEnvVars();
  if (missing.length === 0) {
    return "Email service is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASSWORD environment variables in your deployment platform.";
  }
  return `Email service is not configured. Missing environment variable(s): ${missing.join(
    ", "
  )}. Please set them in your deployment platform (e.g. Vercel).`;
}

/**
 * Validates that SMTP is configured and returns the config or throws a descriptive error.
 * Used by API routes to fail fast with a clear message.
 */
export function requireSmtpConfig(): SmtpConfig {
  const config = getSmtpConfig();
  if (!config) {
    const missing = getMissingSmtpEnvVars().join(", ");
    throw new Error(
      `SMTP is not configured. Missing environment variable(s): ${missing}. Set the SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASSWORD environment variables. For local development, copy .env.example to .env.local and fill in your credentials.`
    );
  }
  return config;
}