import React, { ReactNode } from "react";
import Navbar from "./_components/ui/navbar/navbar";

interface WithHomeLayoutProps {
  children: ReactNode;
}

export default function WithHomeLayout({ children }: WithHomeLayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
