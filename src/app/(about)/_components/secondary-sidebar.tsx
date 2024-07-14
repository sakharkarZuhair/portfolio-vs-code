import React from "react";
import SecondarySidebarHeader from "./secondary-sidebar-header";
import SecondarySidebarDetails from "./secondary-sidebar-details";

const SecondarySidebar = () => {
  return (
    <div className="text-white w-[200px] h-[100%] border-r-[1px] border-r-[#607B96]">
      <SecondarySidebarHeader />
      <div className="">
        <SecondarySidebarDetails />
      </div>
    </div>
  );
};

export default SecondarySidebar;
