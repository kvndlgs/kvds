import type { Metadata } from "next";
import "./globals.css";

import Navbar from '../components/navbar'; 


export const metadata: Metadata = {
  title: "KVDS",
  description: "Web Dev & Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
