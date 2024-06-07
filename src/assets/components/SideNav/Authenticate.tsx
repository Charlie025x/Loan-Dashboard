import React from "react";
import { FaCheck, FaChevronDown, FaExclamation } from "react-icons/fa";
import AccordionHead from "../AccordionHead";

const Authenticate = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow((prevState) => !prevState);
  return (
    <>
      <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[auto_1fr_auto] items-center justify-between">
        <div className="flex items-center self-stretch rounded-r-md bg-green-500 px-4">
          <FaCheck className="" />
        </div>
        <button className="flex justify-between" onClick={handleClick}>
          <p className="ml-2 text-white">Authenticate</p>
          <p className="mx-2 rounded-full border p-1">
            <FaChevronDown
              color="white"
              className={`transition-transform ${show ? "rotate-180" : ""}`}
            />
          </p>
        </button>
      </div>

      <div
        className={`overflow-y-hidden bg-slate-200 ${!show ? "max-h-0" : "max-h-96"} transition-all duration-100 ease-in-out`}
      >
        <div className="flex flex-col p-2">
          {" "}
          <h5>Verify one of the following:</h5>
          <div className="flex items-center">
            <input
              type="checkbox"
              name=""
              id=""
              className="checked:blue-700 h-4 w-4 cursor-pointer appearance-none rounded-sm border-2 border-blue-700 bg-transparent checked:bg-blue-700"
            />
            <p className="grow">Acct #</p>
            <p className="font-bold">xxx-xx-xxxx</p>
          </div>
          <div className="flex items-center">
            <input
              className="checked:blue-700 h-4 w-4 cursor-pointer appearance-none rounded-sm border-2 border-blue-700 bg-transparent checked:bg-blue-700"
              type="checkbox"
              name=""
              id=""
            />
            <p className="grow">SSN</p>
            <p className="font-bold">xxx-xx-xxxx</p>
          </div>
          <h5>Verify Date of Birth:</h5>
          <div className="flex items-center">
            <input
              className="checked:blue-700 h-4 w-4 cursor-pointer appearance-none rounded-sm border-2 border-blue-700 bg-transparent checked:bg-blue-700"
              type="checkbox"
              name=""
              id=""
            />
            <p className="grow">DOB</p>
            <p className="font-bold">xxx-xx-xxxx</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authenticate;
