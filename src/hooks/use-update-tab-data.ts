import { useTabStore, ActiveTabType } from "@/hooks/use-tab-data-store"; // Update with your actual path
import { dataForNavigation } from "@/lib/sub-navigation-data";

export const useUpdateTabData = () => {
  const { setTabData } = useTabStore();

  const updateTabData = (type: ActiveTabType) => {
    console.log("Changing Tab", type);

    const newTabData = dataForNavigation.find(
      (value: any) => value.heading === type
    );

    if (newTabData) {
      setTabData(type, newTabData);
    } else {
      console.error("Tab data not found for type:", type);
    }
  };

  return { updateTabData };
};
