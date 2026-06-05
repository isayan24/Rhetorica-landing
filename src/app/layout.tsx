import type { Metadata } from "next";
import { Poppins, Montserrat, Pirata_One } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const pirataOne = Pirata_One({
  variable: "--font-pirata",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Rhetorica '26 | Annual Literary Festival of Techno International New Town",
  description: "Rhetorica '26 is the Annual Literary Festival of Techno International New Town.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Rhetorica '26 | Annual Literary Festival",
    description: "Join us for Rhetorica '26, the Annual Literary Festival of Techno International New Town.",
    url: "https://rhetorica.tint.edu.in",
    images: [
      {
        url: "https://rhetorica.vercel.app/rhetorica-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Rhetorica 26 Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhetorica '26 | Annual Literary Festival",
    description: "The Annual Literary Festival of Techno International New Town.",
    images: ["https://rhetorica.vercel.app/rhetorica-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${pirataOne.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-black font-sans">{children}</body>
    </html>
  );
}

