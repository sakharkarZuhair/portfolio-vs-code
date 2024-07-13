import React from "react";
import PrimarySidebar from "./_components/primary-sidebar";
import SecondarySidebar from "./_components/secondary-sidebar";
import AboutNavigation from "./about-me/_components/about-navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row h-[100%]">
      <AboutNavigation />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
