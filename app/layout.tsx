import type { Metadata } from "next";
import Header from "@/app/components/Header";
import "./globals.css";

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
    <html lang="ko" className="min-h-screen">
      <body className="min-h-screen">
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
