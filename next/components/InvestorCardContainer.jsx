import React from "react";
import { InvestorCard } from "./";

const InvestorCardContainer = ({ data }) => {
  return (
    <div className="flex flex-col space-y-6 lg:space-y-0 flex-wrap lg:flex-row items-center justify-between mt-10">
      {data.map((item) => (
        <InvestorCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default InvestorCardContainer;
