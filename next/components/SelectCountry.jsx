import React, { useState } from "react";
const countries = [
  { value: "aze", name: "Azerbaijan" },
  { value: "en", name: "England" },
  {
    value: "ru",
    name: "Russia",
  },
  {
    value: "ukr",
    name: "Ukrania",
  },
];
const SelectCountry = () => {
  const [choice, setChoice] = useState("country");

  return (
    <select
      name="countries"
      value={choice}
      defaultValue={"Country"}
      onChange={(e) => setChoice(e.target.value)}
      className="appearance-none outline-none rounded-md px-2 text-center text-suvagrey border bg-aliceblue border-blue">
      {countries.map((country, i) => (
        <option key={i} className="text-left" value={country.value}>
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default SelectCountry;
