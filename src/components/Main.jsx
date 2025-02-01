import React, { useState } from "react";
import { useLocations, useAssets } from "../hooks/useAssetsData";
import TreeView from "./TreeView";
import Filter from "./Filter";
import SensorView from "./SensorView";

const Main = ({ selectedUnit, filter }) => {
  const { data: locations, locationsLoading } = useLocations(selectedUnit.id);
  const { data: assets, isLoading: assetsLoading } = useAssets(selectedUnit.id);
  const [query, setQuery] = useState("");
  const [selectedSensor, setSelectedSensor] = useState(null);

  const handleSensorClick = (sensor) => {
    setSelectedSensor(sensor);
  };

  if (locationsLoading || assetsLoading) return <p>Loading...</p>;

  return (
    <div className="flex gap-2">
      <div className="flex-none w-[479px] h-[720px] border border-gray-200">
        <Filter setQuery={setQuery} />
        <div className="w-full h-[675px] overflow-y-scroll p-[4px]">
          {locations && assets && (
            <TreeView
              locations={locations}
              assets={assets}
              searchQuery={query}
              filter={filter}
              onSensorClick={handleSensorClick}
            />
          )}
        </div>
      </div>
      <div className="grow h-[720px] border border-gray-200">
        <SensorView selectedSensor={selectedSensor}/>
      </div>
    </div>
  );
};

export default Main;
