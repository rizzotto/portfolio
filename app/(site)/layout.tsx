import "../globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Providers from "./provider";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata = {
  title: "Portfolio",
  description: "Generated by Next + Sanity",
  icons: {
    icon: "../favicon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} font-sans max-w-6xl mx-auto py-10 px-4 scrollbar-thin scrollbar-thumb-neutral-200 scrollbar-track-neutral-400  dark:scrollbar-thumb-neutral-700 dark:scrollbar-track-neutral-900`}
      >
        <Providers>
          <Header />
          <main className="py-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
