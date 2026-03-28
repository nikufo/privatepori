import type { Metadata } from "next";
import { Hind_Siliguri, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"]
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teachlink.com.bd"),
  title: "TeachLink | সঠিক শিক্ষক, সঠিক সময়",
  description: "TeachLink helps Bangladeshi families find verified tutors and helps teachers discover quality tuition opportunities.",
  openGraph: {
    title: "TeachLink | Bangladesh's Teacher Marketplace",
    description: "Find verified tutors near you and connect with trusted teachers across Bangladesh.",
    url: "https://teachlink.com.bd",
    siteName: "TeachLink",
    locale: "bn_BD",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TeachLink | সঠিক শিক্ষক, সঠিক সময়",
    description: "Bangladesh's trusted marketplace for tutors, parents, and tuition opportunities."
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable} ${plusJakartaSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
