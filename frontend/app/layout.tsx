import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Find This Base",
  description: "AI-powered Clash of Clans base finder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}