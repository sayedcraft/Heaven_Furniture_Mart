import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import IntroSplash from "@/components/ui/IntroSplash";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Heaven Furniture Mart | Bespoke Furniture in Chattogram",
  description:
    "Discover bespoke furniture, custom interiors, and thoughtful craftsmanship at Heaven Furniture Mart in Chattogram.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* INTRO FIRST */}
        <IntroSplash />

        {/* WEBSITE */}
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}