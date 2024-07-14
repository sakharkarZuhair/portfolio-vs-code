import useUpdateTabData  from "@/hooks/use-update-tab-data";
import { dataForNavigation } from "@/lib/sub-navigation-data";
import { IconListPrimarySidebar } from "@/lib/types";
import Image from "next/image";
import React from "react";

const NavigationIconPrimary = ({
  icon,
  hoverText,
  name,
  activeHeading,
}: IconListPrimarySidebar) => {
  const updateTabData = useUpdateTabData();

  return (
    <div
      onClick={() => updateTabData(name)}
      className="h-[25px] w-[25px] mt-6 cursor-pointer"
    >
      <Image
        src={icon}
        alt={hoverText}
        height={2500}
        width={2500}
        className={`h-[100%] w-[100%] object-contain ${
          name == activeHeading ? "opacity-100" : "opacity-40"
        }`}
      />
    </div>
  );
};

export default NavigationIconPrimary;
