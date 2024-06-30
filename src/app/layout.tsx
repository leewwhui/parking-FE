import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import React, { FC } from "react";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "./providers/SessionProvider";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = (props) => {
  const { children } = props;

  return (
    <html lang="en">
      <body className={lato.className}>
        <SessionProvider>{children}</SessionProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
