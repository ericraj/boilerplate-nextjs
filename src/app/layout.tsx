import type { Metadata } from "next";
import localFont from "next/font/local";
import { RootLayoutProps } from "~/types/layout";

import "./globals.css";

const fontRaleway = localFont({
  src: "../assets/fonts/Raleway-VariableFont_wght.ttf",
  variable: "--raleway",
  weight: "300 400 500 600 700",
});

export const metadata: Metadata = {
  title: "Boilerplate Next.js",
  description: "",
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={`${fontRaleway.className} antialiased`}>{children}</body>
    </html>
  );
}
