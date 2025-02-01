import React from "react";

const Header = ({ Units, onUnitSelect }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleToggle = (index) => {
    const newIndex = index === activeIndex ? index : index;
    setActiveIndex(newIndex);
    onUnitSelect(newIndex !== null ? Units[newIndex] : null);
  };

  return (
    <header className="flex place-content-between items-center h-[48px] bg-[#17192e] px-[8px]">
      <div className="flex items-center">
        <img className="w-[103px] h-[14px]" src="./logo.png" alt="Logo" />
      </div>
      <ul className="flex items-center gap-2">
        {Units.map((unit, index) => (
          <li
            key={index}
            className={`flex items-center gap-1 w-[95px] h-[24px] cursor-pointer px-[5px] ${
              activeIndex === index ? "bg-blue-700" : "bg-blue-900"
            }`}
            onClick={() => handleToggle(index)}
          >
            <span>
              <img src="./icons/unit.png" alt="" />
            </span>
            <p className="font-bold text-[12px] text-white">{unit.name}</p>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
