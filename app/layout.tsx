import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Positive Research Ltd. — Market-Neutral Crypto Alpha",
  description: "AI-driven quantitative crypto trading firm. Market-neutral long-short strategy with 67% APR and 2.93 Sharpe ratio.",
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
