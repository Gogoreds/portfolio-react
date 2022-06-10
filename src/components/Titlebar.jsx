import React from "react";
import { SiVisualstudiocode } from "react-icons/si";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from "react-icons/vsc";
import {
  BsLayoutWtf,
  BsLayoutSidebarReverse,
  BsLayoutSidebar,
  BsLayoutSplit,
} from "react-icons/bs";

const Titlebar = () => {
  return (
    <div className="sticky flex justify-between items-center h-8 border-b-2 border-solid">
      <SiVisualstudiocode size={20} className="ml-1 mt-1 fill-blue-600" />
      <div className="absolute pl-6 ml-2 space-x-2 mt-1 cursor-pointer items-center hidden md:hidden lg:flex">
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <div>
        <span className="flex mt-1.5 justify-center items-center md:ml-32">
          Mo Arefi Portfolio - Visual Studio Code
        </span>
      </div>
      <div className="flex cursor-pointer">
        <span>
          <BsLayoutSidebarReverse size={20} className="mr-1 mt-1 " />
        </span>
        <span>
          <BsLayoutSplit size={20} className="mr-1 mt-1 ml-1" />
        </span>
        <span>
          <BsLayoutSidebar size={20} className="mr-1 mt-1 ml-1" />
        </span>

        <span> | </span>
        <span>
          <BsLayoutWtf size={16} className="ml-1 mr-1 mt-1.5" />
        </span>
        <span>
          <VscChromeMinimize size={20} className="mr-1 ml-2 mt-1" />
        </span>
        <span>
          <VscChromeMaximize size={20} className="mr-1 mt-1" />
        </span>
        <span>
          <VscChromeClose size={20} className="mr-1 mt-1" />
        </span>
      </div>
    </div>
  );
};

export default Titlebar;
