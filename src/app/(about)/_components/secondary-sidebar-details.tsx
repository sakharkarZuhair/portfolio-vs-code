import {
  primaryFolderIcon,
  quatenaryFolderIcon,
  rightArrowIcon,
} from "@/assets";
import { Typography } from "@/components/typography/Typography";
import Image from "next/image";
import React from "react";

const SecondarySidebarDetails = () => {
  return (
    <div className="flex flex-col gap-2 px-3 py-5">
      <Heading />
      <Heading />
      <Heading />
      <div className="px-5">
        <HeadingSecondary />
      </div>
    </div>
  );
};

const Heading = () => {
  return (
    <div className="flex flex-row items-center gap-1 cursor-pointer">
      <div className="w-[14.73px] h-[12px]">
        <Image
          src={rightArrowIcon}
          alt="Right Arrow Icon"
          height={2500}
          width={2500}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex items-center gap-2">
        <div className="w-[14.44px] h-[13px]">
          <Image
            src={primaryFolderIcon}
            alt="Primary Folder Icon"
            height={2500}
            width={2500}
            className="h-full w-full object-cover"
          />
        </div>
        <Typography variant={"active"} size={"default"}>
          bio
        </Typography>
      </div>
    </div>
  );
};

const HeadingSecondary = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-[14.44px] h-[13px]">
        <Image
          src={quatenaryFolderIcon}
          alt="Primary Folder Icon"
          height={2500}
          width={2500}
          className="h-full w-full object-cover"
        />
      </div>
      <Typography variant={"active"} size={"default"}>
        high-school
      </Typography>
    </div>
  );
};

export default SecondarySidebarDetails;
