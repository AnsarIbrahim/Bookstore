import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import { MdDarkMode } from 'react-icons/md';
import PropTypes from 'prop-types';
import './navi.css';

const Navigation = ({ handleDarkMode, isDarkMode }) => (
  <div className="fixed nav-bar h-20 flex w-full items-center justify-around whitespace-normal bg-white shadow shadow-slate-200 sm:h-24 z-40 dark:bg-gray-800">
    <nav className=" w-full p-3 sm:w-[60vw]">
      <ul className=" flex flex-col items-center gap-[4vw]  sm:flex-row">
        <h1 className="nav-bar text-4xl font-semibold not-italic text-[#0290ff] antialiased hover:italic hover:subpixel-antialiased mt-8 sm:mt-0 ">
          Bookstore CMS
        </h1>
        <li>
          <Link
            to="/"
            className="text-black no-underline hover:text-[#2563eb]  hidden md:block transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            BOOKS
          </Link>
        </li>
        <li>
          <Link
            to="/categories"
            className="text-slate-300 no-underline hidden md:block transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            CATEGORIES
          </Link>
        </li>
      </ul>
    </nav>
    <div className="user-icon-container mr-3" title="Click to see LINKEDIN profile">
      <a href="https://www.linkedin.com/in/ansar-ibrahim-61447424a/">
        <ImUser className="user-icon animate-bounce" />
      </a>
    </div>
    <div>
      {isDarkMode ? (
        <button type="button" title="darkmode" onClick={handleDarkMode}>
          <MdDarkMode className="sm:block hidden text-white" />
        </button>
      ) : (
        <button type="button" title="darkmode" onClick={handleDarkMode}>
          <MdDarkMode className="sm:block hidden text-slate-600" />
        </button>
      )}
    </div>
  </div>
);

Navigation.defaultProps = {
  handleDarkMode: () => {},
};

Navigation.propTypes = {
  handleDarkMode: PropTypes.func,
  isDarkMode: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Navigation;
