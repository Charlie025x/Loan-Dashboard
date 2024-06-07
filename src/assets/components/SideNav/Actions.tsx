import React from "react";
import { BsFileEarmarkFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

const Actions = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow((prevState) => !prevState);
  return (
    <>
      <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[auto_1fr_auto] items-center justify-between">
        <div className="flex items-center self-stretch rounded-r-md px-4">
          <BsFileEarmarkFill className="" color="white" />
        </div>
        <button className="flex justify-between" onClick={handleClick}>
          <p className="bg-slate-200">Actions</p>
          <p className="mx-2 rounded-full border p-1">
            <FaChevronDown color="white" className="rotate-180" />
          </p>
        </button>
      </div>

      <div
        className={`flex flex-col overflow-y-hidden bg-slate-200 ${!show ? "max-h-0" : "max-h-64"} transition-all duration-100 ease-in-out`}
      >
        <div className="grid border-black [&>div]:border-b">
          <div className="relative px-2 py-6">
            <label
              className="absolute left-0 ml-1 -translate-y-3 bg-slate-200 px-1 text-sm"
              htmlFor="Search"
            >
              Search
            </label>
            <input
              className="w-full rounded-sm border border-blue-700 bg-transparent p-1"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="p-1">
            <button className="flex border border-black">Payment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Actions;
