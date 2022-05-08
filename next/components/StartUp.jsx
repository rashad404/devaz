import React from "react";
import { useState } from "react";
import {
  StartUpHeader,
  StartUpContainer,
  HorizontalLine,
  InvestorCardContainer,
  InvestorsHeader,
  SeeMore,
} from "./";
const startups = [7000, 7000, 7000, 7000];
const data = [
  {
    id: 0,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    market: "Lorem ipsum",
    location: "Lorem ipsum",
  },
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    market: "Lorem ipsum",
    location: "Lorem ipsum",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    market: "Lorem ipsum",
    location: "Lorem ipsum",
  },
];
const StartUp = () => {
  const [extra, setExtra] = useState(false);
  return (
    <section id="startups">
      <div className="max-w-6xl mx-auto font-lato">
        <StartUpHeader />
        <StartUpContainer startups={startups} />
        <HorizontalLine />
        <InvestorsHeader />
        <InvestorCardContainer data={data} />
        {extra && <InvestorCardContainer data={data} />}
        <SeeMore onClick={setExtra} extra={extra} />
      </div>
    </section>
  );
};

export default StartUp;
