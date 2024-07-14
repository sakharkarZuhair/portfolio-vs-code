import React from "react";
import AboutNavigation from "./_components/about-navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row h-[100%]">
      <AboutNavigation />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
