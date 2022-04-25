import React from "react";
import { CandidateListItem } from "./";
const CandidateList = ({ filtered }) => {
  return (
    <ul className="list-none w-5/12">
      {filtered.map((job, i) => (
        <CandidateListItem key={i} job={job} />
      ))}
    </ul>
  );
};

export default CandidateList;
