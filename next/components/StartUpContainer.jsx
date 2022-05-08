import React from "react";
import { StartUpItem } from "./";
const StartUpContainer = ({ startups }) => {
  return (
    <div className="mt-10 flex flex-wrap space-y-4 lg:space-y-0 items-center justify-between">
      {startups.map((startup, i) => (
        <StartUpItem key={i} startup={startup} />
      ))}
    </div>
  );
};

export default StartUpContainer;
