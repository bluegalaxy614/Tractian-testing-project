import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Main from "../components/Main";
import { fetchCompanyData } from "../api/api";

const Home = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  const handleUnitSelect = (unit) => {
    setSelectedUnit(unit);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchCompanyData();
      setCompanies(data);
      setSelectedUnit(data[0]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-[1366px] h-[860px] mx-auto">
        <Header Units={companies} onUnitSelect={handleUnitSelect} />
        <div className="flex justify-center items-center h-[812px] bg-[#e4ebf0] p-[8px]">
          <div className="bg-white w-[100%] h-[100%] rounded-[4px] p-[16px]">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <>
                <SubHeader selectedUnit={selectedUnit} setFilter={setFilter} />
                <Main selectedUnit={selectedUnit} filter={filter} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
