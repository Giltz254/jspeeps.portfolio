import type { Metadata } from "next";
import "./globals.css";
import { Gelasio, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Jspeeps personal Portfolio",
  description: "Created with the help of Jspeeps",
};
const gelasio = Gelasio({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-gelasio",
});
const calistoga = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          gelasio.variable,
          calistoga.variable,
          `bg-gray-900 text-white antialiased font-serif`
        )}
      >
        {children}
      </body>
    </html>
  );
}
