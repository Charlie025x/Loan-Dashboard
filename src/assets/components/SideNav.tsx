import React from "react";

import { FaExclamation, FaChevronDown, FaCheck } from "react-icons/fa";
import Interaction from "./SideNav/Interaction";
import Authenticate from "./SideNav/Authenticate";
import Alerts from "./SideNav/Alerts";
import AgentNotes from "./SideNav/AgentNotes";

const SideNav = () => {
  return (
    <div className="bg-stone-500">
      SideNav
      <div className="left-pane-wrapper overflow-y-auto overflow-x-hidden">
        <div className="panel-accordion flex flex-col">
          <div className="bg-blue-700">
            <div className="p-4 text-white">
              <div className="mb-2">
                <p>About:</p>
                <p>SSN:</p>
                <p>ED:</p>
              </div>
              <div className="">
                <p>Account Registered</p>
              </div>
            </div>
            <Interaction />
            <Authenticate />
            <Alerts />
            <AgentNotes />
            <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[auto_1fr_auto] items-center justify-between">
              <div className="flex items-center self-stretch rounded-r-md px-4">
                <FaCheck className="" />
              </div>
              <p className="bg-slate-200">Actions</p>
              <p className="mx-2 rounded-full border p-1">
                <FaChevronDown className="rotate-180" />
              </p>
            </div>
            <div className="flex flex-col bg-slate-200 p-2">
              <div>
                <label htmlFor="Search">Search</label>
                <input type="text" name="" id="" />
              </div>
            </div>
            {/* <div className="flex min-h-[calc(1.33rem+16px)] items-center justify-between">
              <div className="flex items-center self-stretch rounded-r-md bg-orange-400 px-4">
                <FaExclamation className="" />
              </div>
              <p className="place-self-start self-start justify-self-start bg-slate-200">
                Authenticate
              </p>
              <p className="rounded-full border p-1">
                <FaChevronDown />
              </p>
            </div> */}
          </div>
          {/* <div className="bg-blue-700">HI</div>
          <div className="bg-blue-700">HI</div> */}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
