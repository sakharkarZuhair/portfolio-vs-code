import { dataForNavigation } from "@/lib/sub-navigation-data";
import create from "zustand";

export type ActiveTabType =
  | "professional-info"
  | "personal-info"
  | "hobbies-info";

interface tabData {
  heading?: string;
  navigation?: {
    name: string;
    type: string;
    data: any;
    extra: boolean;
  }[];
}

interface TabType {
  type: ActiveTabType;
  data: tabData;
  setTabData: (type: ActiveTabType, data: tabData) => void;
}

export const useTabStore = create<TabType>((set) => ({
  type: "professional-info",
  data: dataForNavigation[0],
  setTabData: (type, data) => set({ type, data }),
}));
