import React, { ReactNode } from "react";
import Navbar from "./_components/ui/navbar/navbar";
import Footer from "./_components/ui/footer/Footer";

interface WithHomeLayoutProps {
  children: ReactNode;
}

export default function WithHomeLayout({ children }: WithHomeLayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
