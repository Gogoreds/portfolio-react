import React from "react";
import {
  VscFiles,
  VscGithubAlt,
  VscCode,
  VscFeedback,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-16 border-r-2 border-solid">
      <div className="">
        <VscFiles size={30} className="mx-4 my-4 text-gray-600" />
        <VscCode size={30} className="mx-4 my-4 text-gray-600" />
        <VscGithubAlt size={30} className="mx-4 my-4 text-gray-600" />
        <VscFeedback size={30} className="mx-4 my-4 text-gray-600" />
      </div>
      <div className="absolute bottom-0">
        <VscAccount size={30} className="mx-4 my-4 text-gray-600" />
        <VscSettingsGear size={30} className="mx-4 my-4 text-gray-600" />
      </div>
    </aside>
  );
};

export default Sidebar;
