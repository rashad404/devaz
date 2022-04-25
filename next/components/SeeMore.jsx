import React from "react";

const SeeMore = ({ onClick, extra }) => {
  return (
    <div className="w-28 my-10 mx-auto">
      <button
        onClick={() => onClick(!extra)}
        className="bg-blue w-full text-lg font-medium text-white  rounded full py-1">
        {extra ? "Less" : "See More"}
      </button>
    </div>
  );
};

export default SeeMore;
