import React from "react";
import { useState } from "react";
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
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center  max-w-lg mx-auto mt-4 space-y-6">
          <h1 className="text-5xl">Startup</h1>
          <p className="text-center text-[#636363]  text-lg">
            Put your startup in this section and find investor, developer,
            co-founder, etc.
          </p>
          <button className="bg-[#0B96FF] text-xl font-semibold text-white w-[300px] rounded-full py-1">
            Add your project
          </button>
        </div>
        <div className="mt-10 flex flex-wrap space-y-4 lg:space-y-0 items-center justify-between">
          {startups.map((startup, i) => (
            <div
              key={i}
              className="flex shadow-sm p-2 flex-col w-[100%] lg:w-[25%] items-center space-y-6">
              <h2 className="text-5xl text-[#003054] font-bold"> {startup}</h2>
              <span className="text-xl">Startups</span>
            </div>
          ))}
        </div>
        <hr className="mt-8" />
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center justify-between mt-10">
          <h1 className="text-2xl lg:mb-4 lg:text-5xl text-center lg:text-left text-[#003054] font-bold">
            What investors are looking for?
          </h1>
          <button className="bg-[#0B96FF] text-xl font-semibold text-white w-[250px] rounded-full py-1">
            Invest
          </button>
        </div>
        <div className="flex flex-col space-y-6 lg:space-y-0 flex-wrap lg:flex-row items-center justify-between mt-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-[90%] mx-auto  lg:w-[32%] flex flex-col items-center rounded-lg overflow-hidden shadow-lg">
              <p className="bg-[#0B96FF]  text-white font-bold text-xl  w-full text-center py-1">
                Startup
              </p>
              <div className="space-y-10 p-2 text-center">
                <span className="text-xl text-[#636363]">{item.text}</span>
                <div className="flex flex-col text-[#BDBDBD]">
                  <span> Market: {item.market}</span>
                  <span> Location: {item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {extra && (
          <div className="flex flex-col space-y-6 lg:space-y-0 flex-wrap lg:flex-row items-center justify-between mt-10">
            {data.map((item) => (
              <div
                key={item.id}
                className="w-[90%] mx-auto  lg:w-[32%] flex flex-col items-center rounded-lg overflow-hidden shadow-lg">
                <p className="bg-[#0B96FF]  text-white font-bold text-xl  w-full text-center py-1">
                  Startup
                </p>
                <div className="space-y-10 p-2 text-center ">
                  <span className="text-xl text-[#636363]">{item.text}</span>
                  <div className="flex flex-col text-[#BDBDBD]">
                    <span> Market: {item.market}</span>
                    <span> Location: {item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="w-[100px] mb-10 mx-auto">
          <button
            onClick={() => setExtra(!extra)}
            className="mt-10 bg-[#0B96FF] w-full text-xl font-medium text-white  rounded full py-1">
            {extra ? "Hide" : "See More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartUp;
