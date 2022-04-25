import React from "react";
import { FiSearch } from "react-icons/fi";

import { SelectCountry } from "./";
const JobsInputGroup = ({ search, handleSearchChange }) => {
  return (
    <div className="flex space-x-4 flex-col lg:flex-row mx-auto items-center justify-center">
      <div className="relative">
        <FiSearch className="absolute top-3 sm:top-1 text-lg left-1 text-ocean" />
        <input
          value={search}
          onChange={(e) => handleSearchChange(e)}
          placeholder="Keyword or title title"
          className="w-small py-1 sm:py-0  rounded-md border-suvagrey border outline-none px-6"
          type="text"
        />
      </div>
      <div className="flex mt-4 lg:mt-0 space-x-4">
        <SelectCountry />
        <button className="bg-blue text-white px-4 rounded-md">Search</button>
      </div>
    </div>
  );
};

export default JobsInputGroup;
