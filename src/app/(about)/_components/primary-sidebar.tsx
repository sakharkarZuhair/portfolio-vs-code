import React from "react";
import { professionalInfoIcon, hobbiesIcon, personalInfoIcon } from "@/assets";
import { IconListPrimarySidebar } from "@/lib/types";
import NavigationIconPrimary from "./navigation-icon";

const iconsList: IconListPrimarySidebar[] = [
  {
    icon: professionalInfoIcon,
    hoverText: "Professional Info",
    name: "professional-info",
  },
  {
    icon: personalInfoIcon,
    hoverText: "Personal Info",
    name: "personal-info",
  },
  {
    icon: hobbiesIcon,
    hoverText: "Hobbies",
    name: "hobbies-info",
  },
];

const PrimarySidebar = ({ heading }: { heading?: string }) => {
  return (
    <div className="w-[70px] h-[100%] border-r-[1px] border-r-[#607B96]">
      <div className="flex flex-col items-center">
        {iconsList.map(({ hoverText, icon, name }: IconListPrimarySidebar) => (
          <NavigationIconPrimary
            key={name}
            hoverText={hoverText}
            icon={icon}
            name={name}
            activeHeading={heading}
          />
        ))}
      </div>
    </div>
  );
};

export default PrimarySidebar;
