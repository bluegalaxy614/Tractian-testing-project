import React, { useState } from "react";
import TreeView from "./TreeView";
import Filter from "./Filter";
import SensorView from "./SensorView";

const data = [
  {
    id: 1,
    name: "Parent 1",
    level: 0,
    children: [
      {
        id: 2,
        name: "Child 1",
        level: 1,
        children: [
          {
            id: 3,
            name: "Grandchild 1",
            level: 2,
          },
          {
            id: 4,
            name: "Grandchild 2",
            level: 2,
          },
        ],
      },
      {
        id: 5,
        name: "Child 2",
        level: 1,
        children: [
          {
            id: 6,
            name: "Grandchild 3",
            level: 2,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Parent 2",
    level: 0,
    children: [
      {
        id: 8,
        name: "Child 3",
        level: 1,
      },
    ],
  },
];

const Main = () => {
  const [filteredData, setFilteredData] = useState(data);

  const items = data.map((item) => item.name);

  const onFilter = (filterText) => {
    if (!filterText) {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className="flex gap-2">
      <div className="flex-none w-[479px] h-[720px] border border-gray-200">
        <Filter onFilter={onFilter} />
        <div className="w-full h-[675px] overflow-y-scroll p-[4px]">
          <TreeView data={filteredData} />
        </div>
      </div>
      <div className="grow h-[720px] border border-gray-200">
        <SensorView />
      </div>
    </div>
  );
};

export default Main;
