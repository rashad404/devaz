import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      id="contact-us"
      className="bg-aliceblue font-lato  mx-auto text-center lg:text-left">
      <div className="max-w-6xl mx-auto pt-10">
        <div className="flex flex-col border-b border-suvagrey items-center sm:items-start sm:flex-row space-y-10 sm:space-y-0">
          <div className="sm:pl-10 w-2/12 xl:pl-0">
            <Image
              src="/img/coloredLogo.svg"
              alt="logo"
              width={100}
              height={80}
            />
          </div>
          <div className="grid w-10/12 lg:grid-cols-4 grid-cols-2">
            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-gray-800">
                Lorem ipsum
              </h5>
              <ul className="list-none mb-0">
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-gray-800">
                Lorem ipsum
              </h5>

              <ul className="list-none mb-0">
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-gray-800">
                Lorem ipsum
              </h5>

              <ul className="list-none mb-0">
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-gray-800">
                Lorem ipsum
              </h5>
              <ul className="list-none mb-0">
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-gray-700 flex items-center py-4 space-y-10 sm:space-y-0 flex-col sm:flex-row justify-between">
          <span>© Developer Azerbaijan 2022. All right reserved.</span>
          <div className="flex text-xl space-x-4">
            <FaFacebook className="text-ocean transform transition duration-200 hover:scale-125" />
            <FaInstagram className="text-ocean transform transition duration-200 hover:scale-125" />
            <FaYoutube className="text-red-600 transform transition duration-200 hover:scale-125" />
            <FaGithub className="transform transition duration-200 hover:scale-125" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
