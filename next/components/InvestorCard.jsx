import React from "react";

const InvestorCard = ({ item }) => {
  return (
    <div className="w-ninety mx-auto  lg:w-three flex flex-col items-center rounded-lg overflow-hidden shadow-lg">
      <p className="bg-blue  text-white font-bold text-xl  w-full text-center py-1">
        Startup
      </p>
      <div className="space-y-10 p-2 text-center">
        <p className="text-xl block text-dimgray hover:translate-x-80">
          {item.text}
        </p>
        <div className="flex text-left flex-col text-gray74">
          <span> Market: {item.market}</span>
          <span> Location: {item.location}</span>
        </div>
      </div>
    </div>
  );
};

export default InvestorCard;
