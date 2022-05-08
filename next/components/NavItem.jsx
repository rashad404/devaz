import Link from "next/link";

const NavItem = ({ navItem }) => {
  return (
    <li>
      <Link href={`#${navItem}`.toLowerCase().replace(" ", "-")}>
        <a className="font-medium hover:bg-ocean hover:text-white rounded-sm inline-flex items-center px-4 py-2 transition w-full">
          {navItem}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
