import React from "react";
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
  return (
    <select
      name="countries"
      className="appearance-none outline-none rounded-md px-2 text-center text-suvagrey border bg-aliceblue border-blue">
      <option value="" selected disabled hidden>
        Country
      </option>
      {countries.map((country, i) => (
        <option key={i} className="text-left" value={country.value}>
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default SelectCountry;
