import styles from "./Tabs.module.css";
import { TABS_OPTIONS } from "../../utils/constants";
import { Tab } from "../Tab";
import { DataType } from "../../utils/types";

interface TabsProps {
  selectedTab: DataType;
  setSelectedTab: React.Dispatch<React.SetStateAction<DataType>>;
}

const Tabs = ({ selectedTab, setSelectedTab }: TabsProps) => {
  return (
    <div className={styles['wrapper']}>
      {TABS_OPTIONS.map((tab, index) =>
        <Tab
          key={tab.id}
          label={tab.label}
          active={selectedTab === tab.id}
          withLeftBorder={index > 0}
          onClick={() => setSelectedTab(tab.id)}
        />
      )}
    </div>
  )
}

export default Tabs;
