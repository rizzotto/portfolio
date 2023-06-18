import Link from "next/link";
import "../globals.css";
import { Inter } from "next/font/google";
import { getPages } from "@/sanity/sanity-utils";
import React from "react";
import Providers from "../provider";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata = {
  title: "Portfolio",
  description: "Generated by Next + Sanity",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} font-sans max-w-6xl mx-auto py-10 px-4`}
      >
        <Providers>
          <Header pages={pages} />
          <main className="py-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
