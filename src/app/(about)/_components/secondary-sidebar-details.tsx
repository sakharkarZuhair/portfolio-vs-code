import {
  primaryFolderIcon,
  quatenaryFolderIcon,
  rightArrowIcon,
  secondaryFolderIcon,
  tertiaryFolderIcon,
} from "@/assets";
import { Typography } from "@/components/typography/Typography";
import { SubActiveTabType, useTabStore } from "@/hooks/use-tab-data-store";
import Image from "next/image";
import React, {Fragment, useEffect} from "react";

interface HeadingDetailsInterface{
  name: string,
  type: string,
  data: any,
  extra?: boolean
  active?: string
}

const SecondarySidebarDetails = () => {

  const {tabData, subactiveTab} = useTabStore()

  console.log("DATA COMING HERE", tabData)

  return (
    <div className="flex flex-col gap-1 px-3 py-5">
      {tabData.navigation?.map((value, key) => (
        <Fragment  key={key}>
          <Heading active={subactiveTab} data={value.data} name={value.name} type={value.type} extra={value.extra} />
          <div>
            {value.extra && (
              <div className="px-5 py-1 flex flex-col gap-2">
                <HeadingSecondary heading={"high-school"}/>
                <HeadingSecondary  heading={"university"}/>
              </div>
            )}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

const Heading = ({name, type, active, data}: HeadingDetailsInterface) => {

  const {setSubActive} = useTabStore()

  const handleClick = () => {
    setSubActive(name as SubActiveTabType, data);
  };


  return (
    <>
      <div onClick={handleClick} className="flex flex-row items-center gap-1 cursor-pointer">
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
            src={type == "primary" ?primaryFolderIcon: type == "secondary" ? secondaryFolderIcon : tertiaryFolderIcon}
            alt="Primary Folder Icon"
            height={2500}
            width={2500}
            className="h-full w-full object-cover"
          />
        </div>
        <Typography variant={name == active ? "active":"default"} size={"default"} className={`font-normal`}>
          {name}
        </Typography>
      </div>
    </div>
    </>
  );
};

const HeadingSecondary = ({heading} :{heading : string}) => {
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
        {heading}
      </Typography>
    </div>
  );
};

export default SecondarySidebarDetails;
