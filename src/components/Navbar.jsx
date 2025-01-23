import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import sections from "../../public/data/sections";

const Navbar = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const handleClick = () => {
    return setBurgerStatus(!burgerStatus);
  };

  return (
    <header className="bg-white shadow-md sticky z-10 top-0 ">
      <div className="container mx-auto px-2 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-brown-700">
          ChocoBar Delight
        </h1>
        <nav>
          <ul className="hidden lg:flex space-x-6 text-gray-600 p-2 ">
            {sections.map((section) => (
              <li
                key={section.id}
                className="hover:text-gray-900 text-lg font-bold"
              >
                <a href={section.category}>{section.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <GiHamburgerMenu
          className="lg:hidden"
          onClick={handleClick}
          size={30}
        />
        {burgerStatus && (
          <div className="fixed top-8 right-0  mt-8 p-6 z-10 bg-white h-auto ">
            <div>
              <ul className="m-2 p-2 text-center">
                {sections.map((section) => (
                  <li
                    key={section.id}
                    className="pb-2 border-b-2 border-grey  text-lg mb-2"
                  >
                    <a href={section.category}>{section.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
