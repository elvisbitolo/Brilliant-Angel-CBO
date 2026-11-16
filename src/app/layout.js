import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";
import FloatingWA from "../components/FloatingWA";
import BackToTop from "../components/BackToTop";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Brilliant Angels Academy — Empowering Change, Inspiring Hope | Githogoro, Nairobi",
    template: "%s | Brilliant Angels Academy",
  },
  description:
    "Brilliant Angels Academy (Brilliant Angels CBO, Brilliant Angels Education Centre) is a community school in Githogoro Slums, Nairobi dedicated to education, environmental stewardship, youth empowerment, and community development.",
  keywords: [
    "Brilliant Angels Academy",
    "Brilliant Angels CBO",
    "Brilliant Angel Academy",
    "Brilliant Angel CBO",
    "Brilliant Angels Education Centre",
    "Brilliant Angel Education Centre",
    "Brilliant Angels",
    "Brilliant Angel",
    "community school Githogoro",
    "school Nairobi Kenya",
    "Githogoro education",
    "youth empowerment Nairobi",
    "environment charity Kenya",
    "Sulwe Mentorship and Scholarship",
    "Adopt a Child programme",
  ],
  openGraph: {
    title: "Brilliant Angels Academy — Empowering Change, Inspiring Hope",
    description:
      "Community school in Githogoro Slums, Nairobi. Education, youth empowerment, environmental stewardship, and community development.",
    type: "website",
    locale: "en_US",
    siteName: "Brilliant Angels Academy",
    url: "https://brilliant-angel-cbo.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brilliant Angels Academy — Githogoro, Nairobi",
    description:
      "Empowering Change, Inspiring Hope — Education, Environment, Youth Empowerment in Githogoro, Nairobi.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://brilliant-angel-cbo.vercel.app",
  },
  other: {
    "google-site-verification": "EO1A_95MmyPuFD2ULeSrZ2xzliMUJEdAWtRmclDUwPo",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Brilliant Angels Academy",
    alternateName: [
      "Brilliant Angels CBO",
      "Brilliant Angel Academy",
      "Brilliant Angel CBO",
      "Brilliant Angels Education Centre",
      "Brilliant Angels",
    ],
    url: "https://brilliant-angel-cbo.vercel.app",
    logo: "https://brilliant-angel-cbo.vercel.app/school-logo.png",
    description:
      "Community-based organisation in Githogoro Slums, Nairobi, providing education, environmental stewardship, youth empowerment, and community development.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi County",
      addressCountry: "KE",
      streetAddress: "Githogoro Slums, Runda Estate, Karura Ward, Westlands",
    },
    sameAs: [
      "https://web.facebook.com/BrilliantAngelsAcademy/",
      "https://www.facebook.com/profile.php?id=61564998772558",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254-796-595-995",
      contactType: "customer service",
      availableLanguage: "English",
    },
    email: "brilliantangels2024@gmail.com",
    foundingDate: "2018",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatBot />
        <FloatingWA />
        <BackToTop />
      </body>
    </html>
  );
}
