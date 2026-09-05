/**
 * SMTP verification script.
 * Loads credentials from .env.local (same values added to Vercel),
 * builds the Nodemailer transporter exactly like lib/mailer.ts,
 * and runs verify() which tests the connection + authentication
 * WITHOUT sending an email.
 *
 * Run: node scripts/verify-smtp.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import nodemailer from "nodemailer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, "..", ".env.local");

function loadEnv(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const vars = {};
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) vars[m[1]] = m[2].trim();
  }
  return vars;
}

function getSmtpConfig(env) {
  const host = env.SMTP_HOST;
  const portStr = env.SMTP_PORT;
  const user = env.SMTP_USER;
  const pass = env.SMTP_PASSWORD;
  const mailTo = env.MAIL_TO;
  if (!host || !portStr || !user || !pass) return null;
  const port = parseInt(portStr, 10);
  if (isNaN(port)) return null;
  return {
    host,
    port,
    secure: port === 465,
    user,
    pass,
    mailTo: mailTo || user,
    fromEmail: user,
  };
}

function mask(str) {
  if (!str) return str;
  if (str.length <= 4) return "***";
  return `${str.slice(0, 2)}***${str.slice(-2)}`;
}

async function main() {
  const env = loadEnv(envPath);
  const config = getSmtpConfig(env);

  if (!config) {
    console.error("FAILED: SMTP environment variables are incomplete in .env.local");
    console.error("Required: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD");
    process.exit(1);
  }

  console.log("Config loaded from .env.local:");
  console.log(`  SMTP_HOST       = ${config.host}`);
  console.log(`  SMTP_PORT       = ${config.port} (secure=${config.secure})`);
  console.log(`  SMTP_USER       = ${config.user}`);
  console.log(`  SMTP_PASSWORD   = ${mask(config.pass)} (${config.pass.length} chars)`);
  console.log(`  MAIL_TO         = ${config.mailTo}`);
  console.log("");

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: { user: config.user, pass: config.pass },
  });

  try {
    const ok = await transporter.verify();
    console.log(ok === true ? "SUCCESS: SMTP connection + authentication verified." : "SUCCESS (verify returned): " + ok);
    console.log("These credentials will work for sending email on Vercel.");
    process.exit(0);
  } catch (err) {
    console.error("FAILED to verify SMTP connection:");
    console.error(err.message);
    if (/Invalid login|bad username|password/i.test(err.message)) {
      console.error("=> Authentication failed. Check SMTP_USER and SMTP_PASSWORD (must be a Gmail App Password, not your normal password).");
    } else if (/ENOTFOUND|getaddrinfo/i.test(err.message)) {
      console.error("=> Cannot reach SMTP_HOST. Check the server host value.");
    } else if (/timeout/i.test(err.message)) {
      console.error("=> Connection timed out. Check the port / network access.");
    } else if (!config.secure && /STARTTLS|tls/i.test(err.message)) {
      console.error("=> TLS handshake issue on port 587. Confirm the server requires STARTTLS.");
    }
    process.exit(1);
  }
}

main();