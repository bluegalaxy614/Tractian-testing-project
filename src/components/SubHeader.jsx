import React, { useState } from "react";

const SubHeader = ({ selectedUnit }) => {
  const [sensorActive, setSensorActive] = useState(false);
  const [criticoActive, setCriticoActive] = useState(false);

  const toggleSensorActive = () => {
    setCriticoActive(false);
    setSensorActive(!sensorActive);
  };

  const toggleCriticoActive = () => {
    setSensorActive(false);
    setCriticoActive(!criticoActive);
  };

  return (
    <div className="flex place-content-between items-center h-[32px] px-[8px] mb-[12px]">
      <div className="flex items-center h-[28px]">
        <p className="font-bold text-black text-[20px]">Ativos</p>
        <p className="text-gray-500 text-[16px]">&nbsp;/&nbsp; {selectedUnit}</p>
      </div>
      <ul className="flex items-center gap-2">
        <li
          className={`flex items-center gap-1 h-[32px] cursor-pointer px-[5px] border ${
            sensorActive
              ? "border-blue-500 bg-blue-500 text-white"
              : "border-gray-200 text-gray-600"
          }`}
          onClick={toggleSensorActive}
        >
          <span>
            <img
              src={`${
                sensorActive
                  ? "./icons/active_operation.png"
                  : "./icons/operation.png"
              }`}
              alt="operating"
            />
          </span>
          <p className="font-bold text-[12px]">Sensor de Energia</p>
        </li>
        <li
          className={`flex items-center gap-1 h-[32px] cursor-pointer px-[5px] border ${
            criticoActive
              ? "border-blue-500 bg-blue-500 text-white"
              : "border-gray-200 text-gray-600"
          }`}
          onClick={toggleCriticoActive}
        >
          <span>
            <img
              src={`${
                criticoActive
                  ? "./icons/active_operation.png"
                  : "./icons/operation.png"
              }`}
              alt="operating"
            />
          </span>
          <p className="font-bold text-[12px]">Crítico</p>
        </li>
      </ul>
    </div>
  );
};

export default SubHeader;
