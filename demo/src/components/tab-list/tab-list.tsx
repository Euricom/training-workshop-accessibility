import { $activeTab } from "@/stores";
import { formatSpacesToDashes } from "@/utils/string";
import { useEffect, useState } from "react";

type Props = {
  title?: string;
  items: {
    label: string;
  }[];
};

export const TabList = (props: Props) => {
  const { title = "", items } = props;
  const titleId = formatSpacesToDashes(title);

  const [selected, setSelected] = useState(items[0].label);

  const handleActiveTabChange = (tab: string) => {
    setSelected(tab);
    $activeTab.set(tab);
  };

  return (
    <>
      {title && (
        <h3 id={titleId} className="mb-2 text-xl font-medium">
          {title}
        </h3>
      )}

      <div
        role="tablist"
        className="flex w-full gap-2 rounded-md bg-shark-700 p-1"
        {...(title && { "aria-labelledby": titleId })}
      >
        {items.map((item, index) => {
          const formattedLabel = formatSpacesToDashes(item.label);
          const id = formattedLabel + "-tab";
          const controlsId = formattedLabel + "-tabpanel";
          const isSelected = selected === item.label;
          const tabindex = isSelected ? 0 : -1;

          return (
            <button
              id={id}
              key={id}
              role="tab"
              aria-selected={isSelected ? "true" : "false"}
              aria-controls={controlsId}
              tabIndex={tabindex}
              onClick={() => handleActiveTabChange(item.label)}
              className="flex-1 cursor-pointer rounded-sm px-4 py-2 transition-all hover:bg-shark-950 focus-visible:outline-1 focus-visible:outline-euricom-400 aria-selected:bg-shark-950"
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </>
  );
};
