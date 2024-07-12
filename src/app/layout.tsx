import "@/styles/globals.css";
import localFont from "next/font/local";

import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { cn } from "@/lib/utils";

const myFont = localFont({
  src: "./CalSans-SemiBold.woff2",
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Boom",
  description: "Open source alternative to loom",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          myFont.variable,
        )}
      >
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
