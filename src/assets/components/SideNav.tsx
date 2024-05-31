import React from "react";

import { FaExclamation, FaChevronDown } from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="bg-stone-500">
      SideNav
      <div className="left-pane-wrapper overflow-y-auto overflow-x-hidden">
        <div className="panel-accordion flex flex-col">
          <div className="bg-blue-700">
            <div className="flex min-h-[calc(1.33rem+16px)] items-center justify-between">
              <div className="flex min-h-[calc(1.33rem+16px)] items-center rounded-r-md bg-orange-400 px-4">
                <FaExclamation className="" />
              </div>
              <p className="bg-slate-200">Authenticate</p>
              <p>
                <FaChevronDown />
              </p>
            </div>
          </div>
          <div className="bg-blue-700">HI</div>
          <div className="bg-blue-700">HI</div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
