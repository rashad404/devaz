import React from "react";

const StartUpHeader = () => {
  return (
    <div className="flex flex-col items-center max-w-lg mx-auto mt-4 space-y-4">
      <h1 className="text-5xl text-card font-extrabold">Startup</h1>
      <p className="text-center text-dimgray text-lg">
        Put your startup in this section and find investor, developer,
        co-founder, etc.
      </p>
      <button className="bg-blue text-lg font-medium text-white w-small rounded-full py-1">
        Add your project
      </button>
    </div>
  );
};

export default StartUpHeader;
