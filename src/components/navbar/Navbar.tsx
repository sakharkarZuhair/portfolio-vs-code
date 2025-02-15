import React from "react";
import List from "./List";
import { Typography } from "@/components/typography/Typography";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-[100%] border-b-[0.1px] border-[#607B96]">
      <div className="flex items-center">
        <div className="w-[300px] border-r-[1px] border-[#607B96] hover:bg-white/5 transition-all cursor-pointer">
          <Typography className="p-3 hover:text-white">zuhair-sakharkar</Typography>
        </div>
        <div>
          <List />
        </div>
      </div>
      <div className="p-3 border-l-[1px] border-l-[#607B96] hover:bg-white/5 transition-all cursor-pointer">
        <Typography className="hover:text-white">_contact-me</Typography>
      </div>
    </nav>
  );
};

export default Navbar;
