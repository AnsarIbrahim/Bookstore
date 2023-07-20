import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import { MdDarkMode } from 'react-icons/md';
import PropTypes from 'prop-types';
import './navi.css';

const Navigation = ({ handleDarkMode, isDarkMode }) => (
  <div className="nav-bar fixed z-40 flex h-20 w-full items-center justify-around whitespace-normal bg-white shadow shadow-slate-200 dark:bg-gray-800 sm:h-24">
    <nav className=" w-full p-3 sm:w-[60vw]">
      <ul className=" flex flex-col items-center gap-[4vw]  sm:flex-row">
        <h1 className="nav-bar mt-8 text-4xl font-semibold not-italic text-[#0290ff] antialiased hover:italic hover:subpixel-antialiased sm:mt-0 ">
          Bookstore CMS
        </h1>
        <li>
          <Link
            to="/"
            className="hidden text-black no-underline  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[#2563eb] motion-reduce:transition-none motion-reduce:hover:transform-none md:block"
          >
            BOOKS
          </Link>
        </li>
        <li>
          <Link
            to="/categories"
            className="hidden text-slate-300 no-underline transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 motion-reduce:transition-none motion-reduce:hover:transform-none md:block"
          >
            CATEGORIES
          </Link>
        </li>
      </ul>
    </nav>
    <div
      className="user-icon-container mr-3"
      title="Click to see LINKEDIN profile"
    >
      <a href="https://www.linkedin.com/in/ansar-ibrahim-61447424a/">
        <ImUser className="user-icon animate-bounce" />
      </a>
    </div>
    <div>
      {isDarkMode ? (
        <button type="button" title="darkmode" onClick={handleDarkMode}>
          <MdDarkMode className="hidden text-white sm:block" />
        </button>
      ) : (
        <button type="button" title="darkmode" onClick={handleDarkMode}>
          <MdDarkMode className="hidden text-slate-600 sm:block" />
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
