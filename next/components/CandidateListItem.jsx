// Candidate list item is li item which used in only CandidateList.jsx
import React from "react";
import { BiChevronRight } from "react-icons/bi";
const CandidateListItem = ({ job }) => {
  return (
    <li className="relative">
      <BiChevronRight className="absolute top-1 -left-5" />
      <span className="text-xs">{job.title}</span>
      <span className="ml-4 text-xs text-gray74">{job.count}</span>
    </li>
  );
};

export default CandidateListItem;
