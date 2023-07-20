import React from 'react';
import { MdDarkMode } from 'react-icons/md';
import PropTypes from 'prop-types';

const Footer = ({ handleDarkMode, isDarkMode }) => (
  <>
<<<<<<< HEAD
    <div className="fixed flex w-full h-10 items-center justify-start bg-white sm:h-10 z-40 bottom-0 dark:bg-gray-800 shadow shadow-slate-100">
      <div className=" pl-10">
        {isDarkMode ? (
          <button type="button" title="darkmode" onClick={handleDarkMode}>
            <MdDarkMode className="sm:hidden items-center justify-start text-white" />
          </button>
        ) : (
          <button type="button" title="darkmode" onClick={handleDarkMode}>
            <MdDarkMode className="sm:hidden items-center justify-start text-slate-700" />
          </button>
        )}
=======
    <div className="fixed flex w-full h-10 items-center justify-start bg-white shadow sm:h-10 z-40 bottom-0">
      <div className=" pl-10">
        <MdDarkMode className="sm:hidden items-center justify-start text-slate-700" />
>>>>>>> ac68926189dd01cae0c8526d48fc40565ad7e857
      </div>
      <div className="w-full flex items-center justify-center pr-10">
        <span className="text-red-600/75">©</span>
    &nbsp;
        <a className="text-blue-600/75 hover:text-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none" href="https://github.com/AnsarIbrahim">
          AnsarIbrahim
        </a>
        <span className="text-slate-400">
          &nbsp;
          2023
        </span>
      </div>
    </div>
  </>
);

Footer.defaultProps = {
  handleDarkMode: () => {},
};

Footer.propTypes = {
  handleDarkMode: PropTypes.func,
  isDarkMode: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Footer;
