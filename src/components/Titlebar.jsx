import React from "react";
import { SiVisualstudiocode } from "react-icons/si";

const Titlebar = () => {
  return (
    <div className="flex mr-auto align-center ml-1 mt-1 h-7 border-b-2 border-solid">
      <SiVisualstudiocode size={20} className="fill-blue-600" />
    </div>
  );
};

export default Titlebar;
