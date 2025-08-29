// src/app/layout.tsx

import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto-mono" });

export const metadata = {
  title: "To-Do List App",
  description: "AI Automation Developer Challenge",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${robotoMono.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}