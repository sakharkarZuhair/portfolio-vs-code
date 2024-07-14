"use client";
import React, { useMemo } from "react";
import PrimarySidebar from "./primary-sidebar";
import SecondarySidebar from "./secondary-sidebar";
import { useTabStore } from "@/hooks/use-tab-data-store";

const AboutNavigation = () => {
  const { data, type } = useTabStore();

  return (
    <div className="flex">
      <PrimarySidebar heading={data.heading} />
      <SecondarySidebar />
      <div className="text-white">Cool</div>
    </div>
  );
};

export default AboutNavigation;
