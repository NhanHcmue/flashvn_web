import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FLASH VN",
  description: "Lum",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="mdl-js">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar />
        <Breadcrumb />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

