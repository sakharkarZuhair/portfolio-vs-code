import React from "react";
import PrimarySidebar from "../../_components/primary-sidebar";
import SecondarySidebar from "../../_components/secondary-sidebar";

const AboutNavigation = () => {
  return (
    <div className="flex">
      <PrimarySidebar />
      <SecondarySidebar />
    </div>
  );
};

export default AboutNavigation;
