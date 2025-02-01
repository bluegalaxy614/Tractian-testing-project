import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="flex w-full h-[45px] border-b border-gray-200">
      <input
        type="text"
        placeholder="Buscar Ativo ou Local"
        className="w-[90%] h-full px-2"
        onChange={handleInputChange}
      />
      <button className="w-[10%] h-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Filter;
