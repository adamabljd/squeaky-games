import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Squeaky Games",
  description: "Squeaky Games",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Replace the content value with your own Google verification code */}
        <meta name="google-site-verification"
          content="bXeT48VPTSm_1dfOK9jRwCKqIGTTd4Is2Tc-i0goEts" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
