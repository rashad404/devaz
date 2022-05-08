import { useState } from "react";
import {
  JobsHeader,
  PopularSearches,
  JobsInputGroup,
  CandidatesTable,
} from "./";

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
        {/* search and select country */}
        <JobsInputGroup
          handleSearchChange={handleSearchChange}
          search={search}
        />
        {/* post a job part with some extra text */}
        <JobsHeader />
        {/* Candidates by category */}
        <CandidatesTable filtered={filtered} />
        {/* The most searched jobs */}
        <PopularSearches populars={populars} />
      </div>
    </main>
  );
};

export default Jobs;
// data used in CandidatesTable
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
// dummy data used in Popular searches
const populars = ["Developer", "Designer", "Developer", "Designer"];
