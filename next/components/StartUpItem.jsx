import React from "react";

const StartUpItem = ({ startup }) => {
  return (
    <div className="flex shadow-sm p-2 flex-col w-full lg:w-quarter items-center space-y-6">
      <h2 className="text-5xl text-card font-extrabold"> {startup}</h2>
      <span className="text-xl">Startups</span>
    </div>
  );
};

export default StartUpItem;
