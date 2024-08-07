import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import NavbarSection from "@/components/NavbarSection";
import FooterSection from "@/components/FooterSection";

// Create a Heebo font instance
const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Bishwash Deoju",
  description: "Hi, My name is Bishwash Deoju. I am a frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heebo.className}  flex flex-col min-h-screen`}>
        {/* Header */}
        <NavbarSection />
        {/* Main Content */}
        <div className="flex-grow">{children}</div>
        {/* Footer */}
        <FooterSection />
      </body>
    </html>
  );
}
