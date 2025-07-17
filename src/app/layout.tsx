import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import { ThemeProvider } from "../components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rede Solidária",
  description: "Plataforma de apoio e solidariedade voltada à gerência de doações.",
  keywords: ["doações", "solidariedade", "impacto social"],
  authors: [
    {
      name: "Maria Alice",
      url: "https://github.com/MariaAlic3",
    },
    {
      name: "Gabriel Azevedo",
      url: "https://github.com/BaagrieL",
    },
    {
      name: "Pedro Sousa",
      url: "https://github.com/PedroSousaF",
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {children}
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
