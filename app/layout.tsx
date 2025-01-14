import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";
import {ClerkProvider} from "@clerk/nextjs";

const satoshi = localFont({
  src: "./fonts/Satoshi-Regular.woff",
  variable: "--font-satoshi",
  weight: "100 900",
});
const satoshiBold = localFont({
  src: "./fonts/Satoshi-Bold.woff",
  variable: "--font-satoshi-bold",
  weight: "100 900",
});
const integral = localFont({
  src: "./fonts/IntegralCF-Bold.woff",
  variable: "--font-integral",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NextWear",
  description: "Find Clothes That Matches Your Style!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${satoshi.variable} ${satoshiBold.variable} ${integral.variable} font-satoshi antialiased`}
        >
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
