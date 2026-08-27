import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/section/header/Header";
import Footer from "./components/section/footer/Footer";
import SmoothScroll from "./components/shared/SmothScroll";

export const metadata: Metadata = {
  title: "Aquafix Cleaning Service",
  description: "Aquafix Cleaning Service",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen flex flex-col">
        <SmoothScroll/>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}