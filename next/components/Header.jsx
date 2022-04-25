// Next components
import Image from "next/image";
import Link from "next/link";

// Components
import { Sidebar, NavItem } from "./";
import CustomSelect from "./CustomSelect";
// Icons
import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
// Hooks
import { useState } from "react";
// Options for language selection. must be always label and value values.
const options = [
  {
    value: "az",
    label: "AZE",
  },
  {
    value: "en",
    label: "EN",
  },
  {
    value: "ru",
    label: "RU",
  },
];

// Menu items or Nav Items , in order to change just remove it or add it it will be auto updated on ui
const navItems = [
  "About",
  "Lessons",
  "Services",
  "Startups",
  "Our Team",
  "Contact us",
];

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  const onChangeInput = (value) => {
    console.log(value);
  };

  return (
    <div className="h-14 overflow-auto shadow-md">
      <header className="fixed z-100 bg-white h-14 shadow-md  inset-x-0  top-0 ">
        <nav className="flex h-14 mx-auto max-w-6xl items-center justify-between px-4">
          <Link href="/">
            <a>
              <Image src="/img/logo.svg" width={35} height={30} alt="logo" />
            </a>
          </Link>
          {/* navigation */}

          <ul className="hidden lg:flex text-gray-500">
            {navItems.map((navItem) => (
              <NavItem navItem={navItem} />
            ))}
          </ul>

          {/* search , select lang */}

          <div className="text-black hidden xl:inline-flex space-x-2 relative">
            <FiSearch className="absolute text-ocean text-md top-2 left-4" />
            <input
              type="text"
              placeholder="Search..."
              className="rounded-md border border-gray w-52 outline-none py-2 pl-7 text-xs"
            />
          </div>
          <CustomSelect onChange={onChangeInput} options={options} />

          {/* Button groups large screen right side */}

          <div className="hidden xl:flex justify-between w-36">
            <button className="border-ocean border-2 text-black px-2 h-8 rounded-md">
              Sign Up
            </button>
            <button className="bg-ocean text-white px-2 h-8 rounded-md">
              Log in
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
      <Sidebar
        navItems={navItems}
        sidebar={sidebar}
        handleSidebar={handleSidebar}
      />
    </div>
  );
};

export default Header;
