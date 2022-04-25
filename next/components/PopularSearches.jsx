import React from "react";
import { PopularSearch } from "./";
const PopularSearches = ({ populars }) => {
  return (
    <div className="flex items-center flex-col mt-10 space-y-10 pb-14">
      <h1 className="text-card text-center text-2xl lg:text-5xl font-bold font-lato">
        Popular searches
      </h1>
      <div className="flex flex-col lg:flex-row space-x-0 space-y-4 lg:space-y-0 items-center justify-between lg:space-x-6">
        {populars.map((item, i) => (
          <PopularSearch key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularSearches;
