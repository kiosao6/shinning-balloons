import "../globals.css";
import { gabarito } from "@/fonts";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import { Header } from "@/components/index";
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
      <body className={`${gabarito.className} antialiased !bg-white`}>
        <SessionProvider>
          <Header />
          {children}
          <Toaster className={`${gabarito.className} antialiased`} />
        </SessionProvider>
      </body>
    </html>
  );
}