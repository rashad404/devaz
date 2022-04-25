import React from "react";
import { FaTimes } from "react-icons/fa";
import { NavItem } from "./";
import ButtonGroup from "./ButtonGroup";
const Sidebar = ({ sidebar, handleSidebar, navItems }) => {
  return (
    <>
      {/* overlay come with sidebar */}
      <div
        className={
          sidebar
            ? "bg-black cursor-pointer z-100 xl:hidden inline-block fixed inset-0 opacity-70 visible"
            : "hidden z-100 opacity-0"
        }
        onClick={handleSidebar}></div>
      {/* sidebar */}
      <div
        className={
          sidebar
            ? "bg-white duration-500  z-100 fixed lg:hidden transition-right  inset-y-0 py-4 right-0 w-64"
            : "bg-white fixed inset-y-0 z-100 lg:hidden transition-right py-4 -right-full w-64"
        }>
        {/* Sidebar close icon */}
        <button
          onClick={handleSidebar}
          className="absolute -left-8 p-1 text-2xl rounded-full text-gray-500 top-4 transition hover:text-red-400 ">
          <FaTimes />
        </button>
        {/* Navigation Items */}
        <ul
          onClick={handleSidebar}
          className="font-normal text-gray-500 space-y-4">
          {navItems.map((navItem) => (
            <NavItem key={navItem} navItem={navItem} />
          ))}
          {/* sidebar button group for only small and medium screens */}
          <ButtonGroup />
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
