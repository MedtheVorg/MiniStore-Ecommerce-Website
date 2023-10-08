import { NavLink, Link } from 'react-router-dom';
import { BiSolidDownArrow } from 'react-icons/bi';
import { useState } from 'react';

interface NavProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({ setIsOpen }: NavProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <nav>
      <ul className=" uppercase md:flex items-center gap-8">
        <li
          className="block  mt-2 py-2  hover:bg-semiBlue  md:hover:bg-transparent hover:px-2 md:hover:px-0 hover:text-white md:hover:text-dark transition-all  md:hover:underline md:hover:decoration-2   md:hover:underline-offset-4 "
          onClick={() => setIsOpen(false)}
        >
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive
                ? 'text-semiBlue w-full  inline-block hover:text-white md:hover:text-dark md:underline md:decoration-2   md:underline-offset-4'
                : 'w-full inline-block'
            }
          >
            Home
          </NavLink>
        </li>
        <li
          className=" block  mt-2 py-2   hover:bg-semiBlue md:hover:bg-transparent hover:px-2 md:hover:px-0 hover:text-white md:hover:text-dark transition-all  md:hover:underline md:hover:decoration-2   md:hover:underline-offset-4  "
          onClick={() => {
            setIsOpen(false);
            setIsActive(false);
          }}
        >
          <NavLink
            to={'/shop'}
            className={({ isActive }) =>
              isActive
                ? 'text-semiBlue w-full  inline-block hover:text-white md:hover:text-dark md:underline md:decoration-2   md:underline-offset-4'
                : 'w-full inline-block'
            }
          >
            shop
          </NavLink>
        </li>
        <li
          className="block  mt-2 py-2   hover:bg-semiBlue md:hover:bg-transparent hover:px-2 md:hover:px-0 hover:text-white md:hover:text-dark transition-all  md:hover:underline md:hover:decoration-2   md:hover:underline-offset-4 "
          onClick={() => setIsOpen(false)}
        >
          <NavLink
            to={'/about'}
            className={({ isActive }) =>
              isActive
                ? 'text-semiBlue w-full  inline-block hover:text-white md:hover:text-dark md:underline md:decoration-2   md:underline-offset-4'
                : 'w-full inline-block'
            }
          >
            about
          </NavLink>
        </li>
        <li
          className="block  mt-2 py-2   hover:bg-semiBlue md:hover:bg-transparent hover:px-2 md:hover:px-0 hover:text-white md:hover:text-dark transition-all  md:hover:underline md:hover:decoration-2   md:hover:underline-offset-4 "
          onClick={() => setIsOpen(false)}
        >
          <NavLink
            to={'/blogs'}
            className={({ isActive }) =>
              isActive
                ? 'text-semiBlue w-full  inline-block hover:text-white md:hover:text-dark md:underline md:decoration-2   md:underline-offset-4'
                : 'w-full inline-block'
            }
          >
            blogs
          </NavLink>
        </li>
        <li
          className="block  mt-2 py-2   hover:bg-semiBlue md:hover:bg-transparent hover:px-2 md:hover:px-0 hover:text-white md:hover:text-dark transition-all  md:hover:underline md:hover:decoration-2   md:hover:underline-offset-4 "
          onClick={() => setIsOpen(false)}
        >
          <NavLink
            to={'/contact'}
            className={({ isActive }) =>
              isActive
                ? 'text-semiBlue w-full  inline-block hover:text-white md:hover:text-dark md:underline md:decoration-2   md:underline-offset-4'
                : 'w-full inline-block'
            }
          >
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
