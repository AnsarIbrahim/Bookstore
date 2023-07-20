import React from 'react';

const Footer = () => (
  <div className="fixed flex w-full h-10 items-center justify-center bg-white shadow sm:h-10 z-40 bottom-0">
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
);

export default Footer;
