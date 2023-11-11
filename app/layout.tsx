import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ToastProvider from "@/providers/toast-provider";
import ModalProvider from "@/providers/modal-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A&E cueros",
  description: "A&E cueros tienda",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
