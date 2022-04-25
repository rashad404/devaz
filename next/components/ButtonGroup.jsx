import React from "react";

const ButtonGroup = () => {
  // Button
  return (
    <div className="flex flex-col justify-between w-ninety mx-auto space-y-4">
      <button className="border-ocean border transition-all duration-100 ease-in-out hover:bg-card hover:text-white text-black px-2 h-8 rounded-md">
        Sign Up
      </button>
      <button className="bg-ocean transition-all duration-100 ease-in-out  hover:bg-white border hover:border-ocean hover:text-ocean text-white px-2 h-8 rounded-md">
        Log in
      </button>
    </div>
  );
};

export default ButtonGroup;
