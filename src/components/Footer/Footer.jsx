import React from 'react';
import { MdDarkMode } from 'react-icons/md';

const Footer = () => (
  <>
    <div className="fixed flex w-full h-10 items-center justify-start bg-white shadow sm:h-10 z-40 bottom-0">
      <div className=" pl-10">
        <MdDarkMode className="sm:hidden items-center justify-start text-slate-700" />
      </div>
      <div className="w-full flex items-center justify-center">
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

export default Footer;
