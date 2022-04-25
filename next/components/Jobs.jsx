import { useState } from "react";
import Image from "next/image";
import {
  PopularSearch,
  JobsHeader,
  PopularSearches,
  JobsInputGroup,
  CandidatesTable,
} from "./";

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
    <main id="services" className="bg-aliceblue font-lato">
      <div className="max-w-6xl mx-auto pt-10">
        <JobsInputGroup
          handleSearchChange={handleSearchChange}
          search={search}
        />
        <JobsHeader />
        <CandidatesTable filtered={filtered} />
        <PopularSearches populars={populars} />
      </div>
    </main>
  );
};

export default Jobs;
