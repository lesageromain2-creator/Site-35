import type { Metadata } from "next";
import { Noto_Serif_JP, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fontHeading = Noto_Serif_JP({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});
const fontBody = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Sakura — Restaurant japonais Lyon",
  description: "Restaurant japonais à Lyon. Sushi, sashimi, ramen, plats du chef Kenji Watanabe. Réservation.",
  keywords: ["restaurant japonais Lyon", "sushi Lyon", "ramen Lyon"],
  openGraph: { images: ["/images/hero.jpg"] },
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body className="antialiased bg-accent text-gray-800 font-body">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
