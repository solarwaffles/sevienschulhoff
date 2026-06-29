import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sevien Schulhoff — CS & AI Researcher",
  description: "Computer Science student at UMD, LLM researcher, and full-stack engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
