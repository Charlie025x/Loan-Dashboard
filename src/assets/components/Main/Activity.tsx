import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Activity = () => {
  const [show, setShow] = React.useState(true);
  const handleClick = () => setShow((prevState) => !prevState);
  return (
    <div>
      {/* title */}
      <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[1fr_auto] items-center justify-between bg-blue-700">
        <button className="flex justify-between" onClick={handleClick}>
          <p className="ml-2 text-white">Borrower Activity</p>
          <p className="mx-2 rounded-full border p-1">
            <FaChevronDown
              className={`transition-transform ${show ? "rotate-180" : ""}`}
            />
          </p>
        </button>
      </div>
      {/* drop down */}
      <div
        className={`overflow-y-hidden bg-slate-200 ${!show ? "max-h-0" : "max-h-[50rem]"} transition-all duration-100 ease-in-out`}
      >
        <div
          className={`flex border-spacing-4 flex-col justify-stretch border-4 bg-slate-200 p-4`}
        >
          {/* grid-cols-[repeat(auto-fit,minmax(3rem,1fr))] */}
          {/* auto-cols-[minmax(4rem,auto)] */}
          <div className="">
            <div className="grid grid-cols-1">
              <div className="grid grid-cols-[repeat(3,minmax(auto,1fr))] gap-4 overflow-x-auto">
                <p>Borrower History</p>
                <p>Defer/Forb History</p>
                <p>Payments</p>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="grid grid-cols-[repeat(5,minmax(auto,1fr))] gap-4 overflow-x-auto border-b-2 border-black">
                <p>Date</p>
                <p>Action</p>
                <p>Description</p>
                <p>System</p>
                <p>User</p>
                {/* <input type="search" name="" placeholder="Search" id="" />
              <input type="search" name="" placeholder="Search" id="" />
              <input type="search" name="" placeholder="Search" id="" />
              <input type="search" name="" placeholder="Search" id="" />
              <input type="search" name="" placeholder="Search" id="" /> */}
                <p>06-02-2024 05:06:20 AM</p>
                <p>993</p>
                <p></p>
                <p>ED</p>
                <p>JohnDoe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
