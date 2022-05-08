import React from "react";

const InvestorsHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center justify-between mt-10">
      <h1 className="text-2xl lg:mb-4 lg:text-5xl text-center lg:text-left text-card font-bold">
        What investors are looking for?
      </h1>
      <button className="bg-blue text-xl h-12 font-semibold text-white w-56 rounded-full py-1">
        Invest
      </button>
    </div>
  );
};

export default InvestorsHeader;
