import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import Image from "next/image";

const jobs = [
  {
    title: "Developer",
    count: 234534,
  },
  {
    title: "Graphic designer",
    count: 234534,
  },
  {
    title: "Developer",
    count: 234534,
  },
  {
    title: "Graphic designer",
    count: 234534,
  },
  {
    title: "Developer",
    count: 234534,
  },
  {
    title: "Graphic designer",
    count: 234534,
  },
  {
    title: "Developer",
    count: 234534,
  },
  {
    title: "Graphic designer",
    count: 234534,
  },
  {
    title: "Developer",
    count: 234534,
  },
  {
    title: "Graphic designer",
    count: 234534,
  },
  {
    title: "Developer",
    count: 234534,
  },
  {
    title: "Graphic designer",
    count: 234534,
  },
  {
    title: "Developer",
    count: 234534,
  },
  {
    title: "Graphic designer",
    count: 234534,
  },
];
const populars = ["Developer", "Designer", "Developer", "Designer"];

const Jobs = () => {
  const [search, setSearch] = useState("");
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const filtered = !search
    ? jobs
    : jobs.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase().trim())
      );
  return (
    <main id="services" className="bg-[#F0F3F4]">
      <div className="max-w-6xl mx-auto pt-10">
        <div className="flex space-x-4 flex-col lg:flex-row mx-auto items-center justify-center">
          <div className="relative">
            <FaSearch className="absolute top-3 sm:top-2 text-sm left-2 text-[#BDBDBD]" />
            <input
              value={search}
              onChange={(e) => handleSearchChange(e)}
              placeholder="Keyword or title title"
              className="w-[360px] py-1 sm:py-0 rounded-md border-[#8E8E8E] border outline-none px-6"
              type="text"
            />
          </div>
          <div className="flex mt-4 lg:mt-0 space-x-4">
            <select
              defaultValue="Country"
              name="countries"
              className="appearance-none outline-none rounded-md px-2 text-[#8E8E8E] text-center border bg-[#E6F4FF] border-[#0B96FF]">
              <option value="aze">Azerbaijan</option>
              <option value="aze">Azerbaijan</option>
              <option value="aze">Azerbaijan</option>
              <option value="aze">Azerbaijan</option>
            </select>
            <button className="bg-[#0B96FF] text-white px-4 rounded-md">
              Search
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg flex flex-col space-y-6 lg:space-y-0 lg:flex-row items-center justify-between p-8 mt-10">
          <div className="flex space-x-20 flex-col lg:flex-row">
            <Image
              src="/img/job_svg.svg"
              alt="title_docs"
              width={60}
              height={60}
            />
            <div className="flex flex-col space-y-2">
              <h1 className="text-[#003054] font-bold text-2xl lg:text-5xl">
                Post your own job
              </h1>
              <p className="text-lg w-[300px] text-[#636363]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <button className="bg-[#0B96FF] text-white text-lg w-52 h-12 rounded-full">
            Post a job
          </button>
        </div>
        <div className="p-8 rounded-lg bg-white mt-6">
          <h1 className="text-[#003054] text-xl font-bold mb-4">
            Candidates by category
          </h1>
          <div className="flex item-center justify-between">
            {filtered.length === 0 && (
              <h1 className="text-4xl font-bold text-[#034efe] w-full">
                No candidates founded
              </h1>
            )}
            <ul className="list-none w-5/12">
              {filtered.map((job, i) => (
                <li className="relative" key={i}>
                  <BiChevronRight className="absolute top-1 -left-5" />
                  {job.title}
                </li>
              ))}
            </ul>
            <ul className="list-none w-5/12">
              {filtered.map((job, i) => (
                <li className="relative" key={i}>
                  <BiChevronRight className="absolute top-1 -left-5" />
                  {job.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center flex-col mt-10 space-y-10 pb-14">
          <h1 className="text-[#003054] text-center text-2xl lg:text-5xl font-bold font-poppins">
            Popular searches
          </h1>
          <div className="flex flex-col lg:flex-row space-x-0 space-y-4 lg:space-y-0 items-center justify-between lg:space-x-6">
            {populars.map((item, i) => (
              <button
                className="bg-[#DAE3EB] rounded-sm sm:w-60 sm:py-1 sm:rounded-full sm:text-xl text-[#003054] w-44"
                key={i}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Jobs;
