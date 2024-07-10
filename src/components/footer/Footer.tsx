import React from "react";
import { Typography } from "@/components/typography/Typography";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t-[1px] border-[#607B96] w-[100%] flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-[150px] border-r-[1px] border-[#607B96] hover:bg-white/5 transition-all cursor-pointer">
          <Typography className="p-2 hover:text-white">find me in</Typography>
        </div>
        <div className="flex">
          <div className="border-r-[1px] border-[#607B96] hover:bg-white/5 transition-all cursor-pointer p-3 text-[#607B96] hover:text-white">
            <FaFacebookF size={18} />
          </div>
          <div className="border-r-[1px] border-[#607B96] hover:bg-white/5 transition-all cursor-pointer p-3 text-[#607B96] hover:text-white">
            <FaInstagram size={20} />
          </div>
        </div>
      </div>
      <div className="w-[130px] flex items-center hover:bg-white/5 transition-all cursor-pointer">
        <div className="border-l-[1px] border-[#607B96]">
          <Typography className="p-2 hover:text-white">@username</Typography>
        </div>
        <div className="hover:bg-white/5 transition-all cursor-pointer text-[#607B96] hover:text-white">
            <FaGithub size={20} />
          </div>
      </div>
    </div>
  );
};

export default Footer;
