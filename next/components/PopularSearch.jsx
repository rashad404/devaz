import React from "react";

const PopularSearch = ({ item }) => {
  return (
    <button className="bg-pattensblue rounded-sm sm:w-60 sm:py-1 sm:rounded-lg sm:text-xl text-card w-44">
      {item}
    </button>
  );
};

export default PopularSearch;
