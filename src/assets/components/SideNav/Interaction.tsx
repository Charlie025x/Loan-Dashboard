import React from "react";
import { FaChevronDown, FaExclamation } from "react-icons/fa";

const Interaction = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow((prevState) => !prevState);
  return (
    <>
      <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[auto_1fr_auto] items-center justify-between bg-blue-700">
        <div className="flex items-center self-stretch rounded-r-md bg-orange-400 px-4">
          <FaExclamation className="" />
        </div>
        <button className="flex justify-between" onClick={handleClick}>
          <p className="bg-slate-200">Set Interaction</p>
          <p className="mx-2 rounded-full border p-1">
            <FaChevronDown
              className={`transition-transform ${show ? "rotate-180" : ""}`}
            />
          </p>
        </button>
      </div>

      <div
        className={`flex flex-col overflow-y-hidden bg-slate-200 ${!show ? "max-h-0" : "max-h-40"} transition-all duration-100 ease-in-out`}
      >
        <div className="px-2 py-4">
          <div className="flex flex-col py-4">
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
      </div>
    </>
  );
};

export default Interaction;
