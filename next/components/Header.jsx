import Image from "next/image";
import Link from "next/link";
import { FaTimes, FaBars, FaSearch } from "react-icons/fa";
import { useState } from "react";
const navItems = [
  "About",
  "Lessons",
  "Services",
  "Startups",
  "Our Team",
  "Contact us",
];
const langs = ["en", "aze"];

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="h-14 shadow-md">
      <header className="fixed z-[50] bg-white h-14 shadow-md  inset-x-0  top-0 ">
        <nav className="flex h-14 mx-auto max-w-6xl items-center justify-between px-4">
          <Link href="/">
            <a>
              <Image src="/img/logo.svg" width={35} height={30} alt="logo" />
            </a>
          </Link>
          {/* navigation */}
          {/*  */}
          <ul className="hidden lg:flex text-gray-500">
            {navItems.map((navItem) => (
              <li key={navItem}>
                <Link href={`#${navItem}`.toLowerCase().replace(" ", "-")}>
                  <a className="font-medium inline-flex rounded-md items-center hover:bg-gray-200 px-4 py-2 transition w-full">
                    {navItem}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          {/* search , select lang */}
          <div className="text-black hidden lg:inline-flex overflow-hidden space-x-2 relative">
            <FaSearch className="absolute text-xs text-gray-500 top-[50%] left-4 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              className="rounded-md border-2 w-[200px] outline-none py-1 pl-6 text-[12px]"
            />
            <select
              name="langs"
              className="bg-transparent border-0 outline-none">
              {langs.map((lang) => (
                <option key={lang} value="en">
                  {lang.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* Button groups large screen right side */}
          <div className="hidden lg:flex justify-between w-36">
            <button className="bg-[#E6F4FF] text-[#4e4e4e] px-2 h-8 rounded-md">
              Log in
            </button>
            <button className="bg-[#0B96FF] text-white px-2 h-8 rounded-md">
              Sign Up
            </button>
          </div>
          {/* Hamburger menu icon for medium and small screens */}
          <button
            onClick={handleSidebar}
            className="p-2 rounded-full lg:hidden text-black transition hover:bg-blue-400">
            <FaBars />
          </button>
        </nav>
      </header>
      {/* overlay comes with sidebar */}
      <div
        className={
          sidebar
            ? "bg-black cursor-pointer z-[51] lg:hidden inline-block fixed inset-0 opacity-70 visible"
            : "hidden z-[51] opacity-0"
        }
        onClick={handleSidebar}></div>
      {/* sidebar */}
      <div
        className={
          sidebar
            ? "bg-white duration-500  z-[51] fixed lg:hidden transition-right  inset-y-0 py-4 right-0 w-64"
            : "bg-white fixed inset-y-0 z-[51] lg:hidden transition-right py-4 -right-full w-64"
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
            <li key={navItem}>
              <Link href={`#${navItem}`.toLowerCase().replace(" ", "-")}>
                <a className="font-medium inline-flex items-center hover:bg-gray-200 px-4 py-2 transition w-full">
                  {navItem}
                </a>
              </Link>
            </li>
          ))}
          {/* sidebar button group for only small and medium screens */}
          <div className="flex flex-col justify-between w-[90%] mx-auto space-y-4">
            <button className="bg-[#E6F4FF] text-[#8E8E8E] px-2 h-8 rounded-md">
              Log in
            </button>
            <button className="bg-[#0B96FF] text-white px-2 h-8 rounded-md">
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
