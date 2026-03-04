import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ChatAssistant } from "@/components/ui/chatbot/ChatAssistant";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JKC Solutions - High-End IT & AI Services",
  description: "Next-generation IT solutions, Generative AI, and Agentic workflows tailored for modern enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground selection:bg-indigo-500/30 min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <ChatAssistant />
        </ThemeProvider>
      </body>
    </html>
  );
}
