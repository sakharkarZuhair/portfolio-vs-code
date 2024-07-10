"use client";
import React from "react";
import { Typography } from "../typography/Typography";
import { navigationList } from "@/lib/navigation-list";
import { usePathname } from "next/navigation";
import Link from "next/link";

const List = () => {
  const pathName = usePathname();
  return (
    <ul className="inline-flex items-center text-center">
      {navigationList?.flatMap(({ name, path, title }, key) => (
        <li
          key={key}
          className={`border-r-[0.1px] border-[#607B96] w-[140px] cursor-pointer transition-all ${
            pathName == path && "border-b-[3px] border-b-[#FEA55F]"
          }`}
        >
          <Link href={path}>
            <Typography
              className="p-3 w-[100%]"
              variant={pathName == path ? "active" : "default"}
            >
              {title}
            </Typography>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
