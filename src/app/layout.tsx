import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppinsMono = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "hollow-UI - Component Framework",
  description:
    "Framework de componentes UI desenvolvido por Ítalo Soares Campos - hollow-UI",
  keywords: "ui, components, hollow-ui, italo soares campos, design system",
  authors: [
    { name: "Ítalo Soares Campos", url: "https://github.com/SCamposs" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${poppinsMono.variable} antialiased font-sans`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
