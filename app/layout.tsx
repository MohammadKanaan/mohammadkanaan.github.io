import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammad Kanaan",
  description: "Junior Web & Mobile developer",
  keywords: [
    "web",
    "mobile",
    "developer",
    "junior",
    "react",
    "next.js",
    "flutter",
    "dart",
    "typescript",
    "javascript",
    "node.js",
    "express.js",
    "mongodb",
    "firebase",
    "sql",
    "git",
    "github",
    "linkedin",
    "portfolio",
    "projects",
  ],
  publisher: "Mohammad Kanaan",
  icons: ["/icons/icon.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="min-h-screen flex justify-center bg-[#fff5f5] dark:bg-neutral-900 text-primary transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
