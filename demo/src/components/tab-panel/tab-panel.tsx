import { $activeTab } from "@/stores";
import { formatSpacesToDashes } from "@/utils/string";
import { useStore } from "@nanostores/react";

type Props = {
  children: React.ReactNode;
  label: string;
};

export const TabPanel = (props: Props) => {
  const { children, label } = props;
  const formattedLabel = formatSpacesToDashes(label);
  const activeTab = useStore($activeTab);

  return (
    <div
      role="tabpanel"
      tabIndex={0}
      id={formattedLabel + "-tabpanel"}
      aria-labelledby={formattedLabel + "-tab"}
      hidden={activeTab !== label}
      className="rounded-md border border-shark-700 bg-shark-950 p-4"
    >
      {children}
    </div>
  );
};
