import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Typography } from "@/components/typography/Typography";

const Description = () => {
  return (
    <div className="leading-[45px]">
      <div>
        <Typography variant={"active"} size={"sm"}>
          Hi all. I am
        </Typography>
      </div>
      <div>
        <Typography variant={"active"} size={"lg"}>
          Zuhair Sakharkar
        </Typography>
      </div>
      <div className="flex items-center gap-2 -mt-1">
        <div>
          <IoIosArrowForward color="#4D5BCE" size={34} />
        </div>
        <Typography variant={"primary"} size={"md"}>
          Full Stack Developer
        </Typography>
      </div>

      <div className="leading-6 mt-14">
        <div>
          <Typography>{"// complete the game to continue"}</Typography>
        </div>
        <div>
          <Typography>{"// you can also see it on my Github page"}</Typography>
        </div>
        <div className="flex gap-2">
          <Typography variant={"primary"}>const</Typography>
          <Typography variant={"secondary"}>githubLink</Typography>
          <Typography variant={"active"}>=</Typography>
          <Typography variant={"tertiary"} className="hover:underline transition-all cursor-pointer">
            {"“https://github.com/example/url”"}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Description;
