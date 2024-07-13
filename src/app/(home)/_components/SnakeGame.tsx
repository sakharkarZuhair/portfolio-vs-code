import { BoltUpLeft, BoltUpRight } from "@/assets/inde";
import Image from "next/image";
import React from "react";

const SnakeGame = () => {
  return (
    <div className="w-[510px] h-[475px] bg-gradient-to-r from-[#175553] via-[#43d9aca9] to-[#175553] rounded-[8px] border-[1px] border-black relative p-2">
      <div className="flex justify-between absolute w-[97%] left-2 top-2">
        <div className="h-[30px] w-[30px]">
          <Image
            alt="Bolt"
            src={BoltUpLeft}
            height={1500}
            width={1500}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[30px] w-[30px]">
          <Image
            alt="Bolt"
            src={BoltUpRight}
            height={1500}
            width={1500}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-between absolute w-[97%] left-2 bottom-2">
        <div className="h-[30px] w-[30px]">
          <Image
            alt="Bolt"
            src={BoltUpLeft}
            height={1500}
            width={1500}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[30px] w-[30px]">
          <Image
            alt="Bolt"
            src={BoltUpRight}
            height={1500}
            width={1500}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
