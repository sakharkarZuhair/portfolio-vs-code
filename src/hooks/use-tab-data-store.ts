import create from "zustand";
import { dataForNavigation } from "@/lib/sub-navigation-data";

export type ActiveTabType =
  | "professional-info"
  | "personal-info"
  | "hobbies-info";

export type SubActiveTabType =
  | "experience"
  | "hard-skills"
  | "soft-skills"
  | "bio"
  | "interests"
  | "education"
  | "sports"
  | "favorite-games";

interface NavigationItem {
  name: string;
  type: string;
  data: any;
  extra: boolean;
}

interface TabData {
  heading?: string;
  navigation?: NavigationItem[];
}

interface SubActiveData {
  data: any; // Adjust 'any' to the correct type if possible
}

interface TabStore {
  activeTab: ActiveTabType;
  tabData: TabData;
  subactiveTab: SubActiveTabType | undefined;
  subActiveData: SubActiveData | undefined;
  setTabData: (type: ActiveTabType, data: TabData) => void;
  setSubActive: (subactiveTab: SubActiveTabType, subActiveData: SubActiveData) => void;
}

export const useTabStore = create<TabStore>((set) => ({
  activeTab: "professional-info",
  tabData: dataForNavigation[0],
  subactiveTab: "experience",
  subActiveData: { data: dataForNavigation[0].navigation[0].data },
  setTabData: (type, data) => set({ activeTab: type, tabData: data }),
  setSubActive: (subactiveTab, subActiveData) => set({ subactiveTab, subActiveData }),
}));
