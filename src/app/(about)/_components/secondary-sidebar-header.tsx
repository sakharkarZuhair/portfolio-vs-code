import { downIcon } from "@/assets";
import { Typography } from "@/components/typography/Typography";
import { useTabStore } from "@/hooks/use-tab-data-store";
import Image from "next/image";
import React from "react";

const SecondarySidebarHeader = () => {
  const { activeTab } = useTabStore();

  return (
    <div className="w-full border-b-[1px] border-b-[#607B96] p-1.5">
      <div className="flex items-center justify-start gap-2.5 ml-2">
        <div className="w-[9px] h-[7px]">
          <Image
            src={downIcon}
            alt="Down Icon"
            height={2500}
            width={2500}
            className="h-full w-full object-cover"
          />
        </div>
        <Typography variant={"active"} className="font-normal">{activeTab}</Typography>
      </div>
    </div>
  );
};

export default SecondarySidebarHeader;
