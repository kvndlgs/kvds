import type { Metadata } from "next";
import "./globals.css";

import Nav from "@/components/nav";
import NavWrapper from "@/components/NavWrapper";


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
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`antialiased overflow-x-hidden`}
      >
      <NavWrapper>
        <Nav />
        {children}
      </NavWrapper>
      </body>
    </html>
  );
}
