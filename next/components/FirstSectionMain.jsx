import React from "react";
import { MdOutlineLocalPostOffice } from "react-icons/md";

const FirstSectionMain = () => {
  return (
    <div className="w-full  md:w-big  lg:w-medium pt-20 text-center lg:text-left lg:pt-40 z-50">
      <h1 className="text-4xl sm:text-7xl font-bold text-card">
        Lorem ipsum dolor sit amet
      </h1>
      <p className="text-md pt-4 opacity-60">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Subscribe part */}

      <div className="w-full justify-center items-center space-y-6 flex-col pt-10 flex sm:space-y-0 lg:items-stretch sm:flex-row  sm:justify-between">
        <div className="w-full h-full grid place-items-center">
          {/* Input with icon */}

          <div className="relative w-small">
            <MdOutlineLocalPostOffice className="absolute text-xl text-ocean top-3 left-4" />
            <input
              className="w-full py-2 h-11 border-ocean border outline-none pl-10 rounded-md"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Subcribe our community"
            />
          </div>
        </div>
        <button className="bg-ocean font-bold h-11 text-white px-5 py-1 rounded-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default FirstSectionMain;
