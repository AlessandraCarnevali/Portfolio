import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// IMPORTA LA NAVBAR
import Navbar from "../components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alessandra | Dev Portfolio",
  description: "Portfolio professionale di Alessandra, Frontend & AI Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 👇 QUI AGGIUNGEMO IL META TAG PER BLOCCARE LA DARK MODE FORZATA */}
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
