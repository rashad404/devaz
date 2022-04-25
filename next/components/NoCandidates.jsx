import React from "react";
const NoCandidates = ({ filtered }) => {
  return (
    <>
      {filtered.length === 0 && (
        <h1 className="text-4xl font-bold text-ocean w-full">
          No candidates founded
        </h1>
      )}
    </>
  );
};

export default NoCandidates;
