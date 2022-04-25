import React from "react";
import { CandidateList, NoCandidates } from "./";
const CandidatesTable = ({ filtered }) => {
  return (
    <div className="p-8 rounded-lg bg-white mt-6">
      <h1 className="text-card text-xl font-bold mb-4">
        Candidates by category
      </h1>
      <div className="flex item-center justify-between">
        <NoCandidates filtered={filtered} />
        {[0, 1].map((index) => (
          <CandidateList key={index} filtered={filtered} />
        ))}
      </div>
    </div>
  );
};

export default CandidatesTable;
