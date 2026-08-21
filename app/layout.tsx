import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Positive Research Ltd. | High Frequency Alpha Long Short",
  description: "AI-driven quantitative crypto trading firm. Market-neutral, scalable and systematic alpha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
