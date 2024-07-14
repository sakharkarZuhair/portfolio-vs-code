import {  useTabStore } from './use-tab-data-store';
import { dataForNavigation } from '../lib/sub-navigation-data';

const useUpdateTabData = () => {
  const { setTabData } = useTabStore();

  const updateTabData = (newType: any) => {
    const tabData = dataForNavigation.find((item) => item.heading === newType);
    if (tabData) {
      setTabData(newType, tabData);
    } else {
      console.error("Tab data not found for type:", newType);
    }
  };

  return updateTabData;
};

export default useUpdateTabData;
