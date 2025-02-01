import React from "react";

const SensorView = () => {
  const getFirstCharacter = (str) => {
    return str.charAt(0);
  };

  return (
    <div>
      <div className="flex items-center w-full h-[56px] border-b border-gray-200 px-[16px] gap-3">
        <h1 className="text-[18px] font-bold">MOTOR RT COAL AF01</h1>
        <div className="size-[6px] rounded-full bg-green-600"></div>
      </div>
      <div className="flex p-[24px]">
        <div className="w-[336px] h-[226px] flex items-center justify-center">
          <img
            className="w-full h-[226px]"
            src="./sensors/sensor1.png"
            alt="sensor"
          />
        </div>
        <div className="grow pl-[33px] flex flex-col items-start justify-center">
          <div className="pb-[24px] border-b border-gray-200 w-[100%]">
            <p className="font-bold text-[16px]">Tipo de Equipamento</p>
            <p className="text-[16px] text-gray-600">
              Motor Elétrico (Trifásico)
            </p>
          </div>
          <div className="pt-[24px]">
            <p className="font-bold text-[16px]">Responsáveis</p>
            <div className="flex gap-2">
              <p className="w-[24px] h-[24px] rounded-full text-white bg-blue-700 text-center">
                {getFirstCharacter("Elétrica")}
              </p>
              <p className="text-[16px] text-gray-600">Elétrica</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-[24px]">
        <div className="w-full grid grid-cols-2 border-t border-gray-200 pt-[24px]">
          <div>
            <p className="font-bold text-[16px]">Sensor</p>
            <div className="flex items-center gap-2">
              <img
                className="w-[15px] h-[15px]"
                src="./icons/sensor.png"
                alt="sensor"
              />
              <p className="text-[16px] text-gray-600">HIO4510</p>
            </div>
          </div>
          <div>
            <p className="font-bold text-[16px]">Receptor</p>
            <div className="flex items-center gap-2">
              <img
                className="w-[15px] h-[15px]"
                src="./icons/receptor.png"
                alt="receptor"
              />
              <p className="text-[16px] text-gray-600">EUH4R27</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorView;
