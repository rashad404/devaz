import React from "react";
import Image from "next/image";

const JobsHeader = () => {
  return (
    <div className="bg-white rounded-lg flex flex-col space-y-6 lg:space-y-0 lg:flex-row items-center justify-between p-8 mt-10">
      <div className="flex space-x-20 flex-col lg:flex-row">
        <Image src="/img/job_svg.svg" alt="title_docs" width={60} height={60} />
        <div className="flex flex-col space-y-2">
          <h1 className="text-card font-extrabold text-2xl lg:text-5xl">
            Post your own job
          </h1>
          <p className="text-lg w-small text-dimgray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
      <button className="bg-blue text-white text-lg w-52 h-12 rounded-full">
        Post a job
      </button>
    </div>
  );
};

export default JobsHeader;
