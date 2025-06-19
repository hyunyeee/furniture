import type { Metadata } from "next";
import Header from "@/app/components/Header";
import "./globals.css";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Furniture",
  description: "가구 홈페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full min-h-screen">
      <body className="flex h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
