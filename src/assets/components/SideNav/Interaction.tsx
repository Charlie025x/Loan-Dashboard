import React from "react";
import { FaChevronDown, FaExclamation } from "react-icons/fa";

const Interaction = () => {
  const [show, setShow] = React.useState(true);
  const handleClick = () => setShow((prevState) => !prevState);
  return (
    <>
      <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[auto_1fr_auto] items-center justify-between bg-blue-700">
        <div className="flex items-center self-stretch rounded-r-md bg-orange-400 px-4">
          <FaExclamation className="" />
        </div>
        <button className="flex justify-between" onClick={handleClick}>
          <p className="ml-2 text-white">Set Interaction</p>
          <p className="mx-2 rounded-full border p-1">
            <FaChevronDown
              color="white"
              className={`transition-transform ${show && "rotate-180"}`}
            />
          </p>
        </button>
      </div>

      <div
        className={`flex flex-col overflow-y-hidden bg-slate-200 ${!show ? "max-h-0" : "max-h-64"} transition-all duration-100 ease-in-out`}
      >
        <div className="px-2 py-4">
          <div className="">
            <div className="relative mb-4">
              <label
                className="absolute left-0 ml-1 -translate-y-3 bg-slate-200 px-1 text-sm"
                htmlFor="InteractionType"
              >
                Interaction Type
              </label>
              <input
                className="w-full rounded-sm border border-blue-700 bg-transparent p-1"
                type="text"
                name=""
                id=""
                value="Inbound"
              />
            </div>

            <div className="relative mb-4">
              <label
                className="absolute left-0 ml-1 -translate-y-3 bg-slate-200 px-1 text-sm"
                htmlFor="InteractionWith"
              >
                Interaction With
              </label>
              <input
                className="w-full rounded-sm border border-blue-700 bg-transparent p-1"
                type="text"
                name=""
                id=""
                value="Borrower"
              />
            </div>
            <div className="relative">
              <label
                className="absolute left-0 ml-1 -translate-y-3 bg-slate-200 px-1 text-sm"
                htmlFor="Name"
              >
                Name
              </label>
              <input
                className="w-full rounded-sm border border-blue-700 bg-transparent p-1"
                type="text"
                name=""
                id=""
              />
            </div>
            <button className="mt-2 rounded-sm bg-green-400 px-2 py-1 font-bold">
              Set Interaction
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interaction;
