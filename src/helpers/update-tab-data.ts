import { ActiveTabType, useTabStore } from "@/hooks/use-tab-data-store";
import { dataForNavigation } from "@/lib/sub-navigation-data";

export const updateTabData = ({ type }: { type?: string }) => {
  const { setTabData } = useTabStore();
  console.log("Changing Tab", type);

  // Validate type against ActiveTabType
  const validTypes: ActiveTabType[] = [
    "professional-info",
    "personal-info",
    "hobbies-info",
  ];

  // Check if the provided type is valid
  if (type && validTypes.includes(type as ActiveTabType)) {
    const tabData = dataForNavigation.find((value) => value.heading === type);

    if (tabData) {
      setTabData(type as ActiveTabType, tabData); // Cast type to ActiveTabType
    } else {
      console.error("Tab data not found for type:", type);
    }
  } else {
    console.error("Invalid tab type:", type);
  }
};
