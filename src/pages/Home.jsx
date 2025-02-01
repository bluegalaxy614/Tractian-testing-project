import React, { useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Main from "../components/Main";

const Units = ["Apex Unit", "Tobias Unit", "Jaguar Unit"];

const Home = () => {
  const [selectedUnit, setSelectedUnit] = useState(Units[0]); // Default to first unit

  // Function to receive selected unit from child
  const handleUnitSelect = (unit) => {
    setSelectedUnit(unit);
  };

  return (
    <>
      <div className="w-[1366px] h-[860px] mx-auto">
        <Header Units={Units} onUnitSelect={handleUnitSelect} />
        <div className="flex justify-center items-center h-[812px] bg-[#e4ebf0] p-[8px]">
          <div className="bg-white w-[100%] h-[100%] rounded-[4px] p-[16px]">
            <SubHeader selectedUnit={selectedUnit} />
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
