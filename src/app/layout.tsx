import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Polkadot AssetHub Hackathon 2025 | Edgetributor & MontaQ Labs",
  description:
    "Join the Polkadot AssetHub Hackathon 2025 in Goa, India. Build on Polkadot, win prizes, and connect with the ecosystem.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/polkadot.png" },
    ],
    shortcut: "/favicon.png",
    apple: "/polkadot.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
