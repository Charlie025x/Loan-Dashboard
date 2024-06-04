import React from "react";

import { FaExclamation, FaChevronDown, FaCheck } from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="bg-stone-500">
      SideNav
      <div className="left-pane-wrapper overflow-y-auto overflow-x-hidden">
        <div className="panel-accordion flex flex-col">
          <div className="bg-blue-700">
            <div className="p-4">
              <div className="mb-2">
                <p>About:</p>
                <p>SSN:</p>
                <p>ED:</p>
              </div>
              <div className="">
                <p>Account Registered</p>
              </div>
            </div>
            <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[auto_1fr_auto] items-center justify-between">
              <div className="flex items-center self-stretch rounded-r-md bg-orange-400 px-4">
                <FaExclamation className="" />
              </div>
              <p className="bg-slate-200">Set Interaction</p>
              <p className="mx-2 rounded-full border p-1">
                <FaChevronDown />
              </p>
            </div>
            <div className="flex flex-col bg-slate-200 p-2">
              {" "}
              <h5>Verify one of the following</h5>
              <div className="flex flex-col">
                <div>
                  <label htmlFor="InteractionType">Interaction Type</label>
                  <input type="text" name="" id="" />
                </div>
                <div>
                  <label htmlFor="InteractionWith">Interaction With</label>
                  <input type="text" name="" id="" />
                </div>
                <div>
                  <label htmlFor="Name">Name</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
            </div>
            <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[auto_1fr_auto] items-center justify-between">
              <div className="flex items-center self-stretch rounded-r-md bg-green-500 px-4">
                <FaCheck className="" />
              </div>
              <p className="bg-slate-200">Authenticate</p>
              <p className="mx-2 rounded-full border p-1">
                <FaChevronDown className="rotate-180" />
              </p>
            </div>
            <div className="flex flex-col bg-slate-200 p-2">
              {" "}
              <h5>Verify one of the following</h5>
              <div className="flex">
                <input type="checkbox" name="" id="" />
                <p>Acct #</p>
                <p>xxx-xx-xxxx</p>
              </div>
              <div className="flex">
                <input type="checkbox" name="" id="" />
                <p>SSN</p>
                <p>xxx-xx-xxxx</p>
              </div>
              <h5>Verify one of the following</h5>
              <div className="flex">
                <input type="checkbox" name="" id="" />
                <p>DOB</p>
                <p>xxx-xx-xxxx</p>
              </div>
            </div>

            <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[auto_1fr_auto] items-center justify-between">
              <div className="flex items-center self-stretch rounded-r-md bg-green-500 px-4">
                <FaCheck className="" />
              </div>
              <p className="bg-slate-200">Borrower Alerts</p>
            </div>
            <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[auto_1fr_auto] items-center justify-between">
              <div className="flex items-center self-stretch rounded-r-md bg-green-500 px-4">
                <FaCheck className="" />
              </div>
              <p className="bg-slate-200">Agent Notes</p>
              <p className="mx-2 rounded-full border p-1">
                <FaChevronDown className="rotate-180" />
              </p>
            </div>
            <div className="flex flex-col bg-slate-200 p-2">
              <div>
                <label htmlFor="AgentNotes">Enter Your Notes</label>
                <input type="text" name="" id="" />
              </div>
            </div>
            <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[auto_1fr_auto] items-center justify-between">
              <div className="flex items-center self-stretch rounded-r-md bg-green-500 px-4">
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
