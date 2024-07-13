import { IconListPrimarySidebar } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavigationIconPrimary = ({
  icon,
  link,
  hoverText,
}: IconListPrimarySidebar) => {
  return (
    <div className="h-[25px] w-[25px] mt-6">
      <Link href={link}>
        <Image
          src={icon}
          alt={hoverText}
          height={2500}
          width={2500}
          className="h-[100%] w-[100%] object-contain"
        />
      </Link>
    </div>
  );
};

export default NavigationIconPrimary;
