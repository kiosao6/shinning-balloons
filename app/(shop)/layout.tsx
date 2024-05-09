import { Footer, Header } from "@/components/index";
import "../globals.css";
import { gabarito } from "@/fonts";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import { SessionProvider } from "next-auth/react";


export const metadata: Metadata = {
  title: "Shinning Balloons",
  description: "Best balloons store ever made",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} antialiased`}>
        <SessionProvider>
          <Header />
          {children}
          <Toaster className={`${gabarito.className} antialiased`} />
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
