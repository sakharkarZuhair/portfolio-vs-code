"use client";
import React from "react";
import { Typography } from "../typography/Typography";
import { Navigation, navigationList } from "@/lib/navigation-list";
import { usePathname } from "next/navigation";
import Link from "next/link";

const List = () => {
  const pathName = usePathname();
  return (
    <ul className="inline-flex items-center text-center">
      {navigationList?.flatMap(({ name, path, title }: Navigation, key) => (
        <li
          key={key}
          className={`border-r-[0.1px] border-[#607B96] w-[140px] cursor-pointer transition-all relative hover:bg-white/5`}
        >
          <Link href={path}>
            <Typography
              className="p-3 w-[100%] hover:text-white"
              variant={pathName == path ? "active" : "default"}
            >
              {title}
            </Typography>
          </Link>
          <div
            className={`absolute w-[100%] bg-[#FEA55F] h-[2px] bottom-[-1px] transition-all ${
              pathName == path ? "visible" : "hidden"
            }`}
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
