import React from "react";
import { BsFileEarmarkFill } from "react-icons/bs";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Actions = () => {
  const [show, setShow] = React.useState(true);
  const handleClick = () => setShow((prevState) => !prevState);
  const actions = [
    "Payment",
    "Repayment Plans",
    "Deferment",
    "Forbearance",
    "Forgiveness And Discharge",
    "Military",
    "Third Party",
    "MISC",
    "Correspond With Customer",
    "Research Request",
    "Disregard Request",
  ];
  return (
    <>
      <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[auto_1fr_auto] items-center justify-between">
        <div className="flex items-center self-stretch rounded-r-md px-4">
          <BsFileEarmarkFill className="" color="white" />
        </div>
        <button className="flex justify-between" onClick={handleClick}>
          <p className="ml-2 text-white">Actions</p>
          <p className="mx-2 rounded-full border p-1">
            <FaChevronDown
              color="white"
              className={`transition-transform ${show && "rotate-180"}`}
            />
          </p>
        </button>
      </div>

      <div
        className={`flex flex-col overflow-y-hidden bg-slate-200 ${!show ? "max-h-0" : "max-h-[100rem]"} transition-all duration-100 ease-in-out`}
      >
        <div className="grid [&>div]:border-b [&>div]:border-black">
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

          {actions.map((data, index) => (
            <div key={index} className="flex items-center justify-between p-4">
              <button className="">{data}</button>
              <FaChevronRight />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Actions;
