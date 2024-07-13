import React from "react";
import { professionalInfoIcon, hobbiesIcon, personalInfoIcon } from "@/assets";
import { IconListPrimarySidebar } from "@/lib/types";
import NavigationIconPrimary from "./navigation-icon";

const iconsList: IconListPrimarySidebar[] = [
  { icon: professionalInfoIcon, link: "#", hoverText: "Professional Info" },
  { icon: personalInfoIcon, link: "#", hoverText: "Personal Info" },
  { icon: hobbiesIcon, link: "#", hoverText: "Hobbies" },
];

const PrimarySidebar = () => {
  return (
    <div className="w-[70px] h-[100%] border-r-[1px] border-r-[#607B96]">
      <div className="flex flex-col items-center">
        {iconsList.map(({ hoverText, icon, link }: IconListPrimarySidebar) => (
          <NavigationIconPrimary
            key={link}
            hoverText={hoverText}
            icon={icon}
            link={link}
          />
        ))}
      </div>
    </div>
  );
};

export default PrimarySidebar;
