// It is a react component which used in Header.jsx
import React from "react";
import Select from "react-select";
const CustomSelect = ({ options, onChange }) => {
  return (
    <Select
      className="hidden w-24 xl:inline-flex"
      placeholder="Seç"
      id="language-select"
      instanceId="language-select"
      onChange={onChange}
      isSearchable={false}
      options={options}
    />
  );
};

export default CustomSelect;
