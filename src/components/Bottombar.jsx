import React from "react";
import {
  VscSourceControl,
  VscSync,
  VscError,
  VscWarning,
  VscBellDot,
  VscCheckAll,
} from "react-icons/vsc";

const Bottombar = () => {
  return (
    <footer className="relative flex justify-between h-6 border-t-2 border-solid">
      <div className="flex">
        <a
          href="https://github.com/Gogoreds/portfolio-react"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row tracking-tighter"
        >
          <VscSourceControl size={17} className="mx-3 my-1 text-gray-600" />
          <p className="">master</p>
        </a>
        <div className="flex">
          <VscSync size={17} className="mx-3 my-1 text-gray-600" />
        </div>
        <div className="flex tracking-tighter">
          <VscError size={17} className="mx-1 my-1 text-gray-600" />
          <p>0</p>
          <VscWarning size={17} className="mx-1 my-1 text-gray-600" />
          <p>0</p>
        </div>
        <div className="absolute right-1">
          {" "}
          <VscBellDot size={17} className="my-1 text-gray-600" />
        </div>
        <div className="absolute flex space-x-2 right-10 tracking-tight">
          {" "}
          <VscCheckAll size={17} className="my-1 text-gray-600" />
          <p>Prettier</p>
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
