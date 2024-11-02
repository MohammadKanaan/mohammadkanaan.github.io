import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammad Kanaan",
  description: "Junior web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="min-h-screen flex justify-center bg-[#fff5f5] dark:bg-neutral-900 text-[#3e3e3e] dark:text-[#FFE1BE] transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
