"use client";
import PrimarySidebar from "./primary-sidebar";
import SecondarySidebar from "./secondary-sidebar";
import { useTabStore } from "@/hooks/use-tab-data-store";

const AboutNavigation = () => {
  const { activeTab, subActiveData } = useTabStore();

  return (
    <div className="flex">
      <PrimarySidebar heading={activeTab} />
      <SecondarySidebar />
      <div className="text-white"></div>
    </div>
  );
};

export default AboutNavigation;
