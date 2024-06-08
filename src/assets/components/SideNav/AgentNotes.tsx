import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdSpeakerNotes } from "react-icons/md";

const AgentNotes = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow((prevState) => !prevState);
  return (
    <>
      <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[auto_1fr_auto] items-center justify-between">
        <div className="flex items-center self-stretch rounded-r-md px-4">
          <MdSpeakerNotes className="" color="white" />
        </div>
        <button className="flex justify-between" onClick={handleClick}>
          <p className="ml-2 text-white">Agent Notes</p>
          <p className="mx-2 rounded-full border p-1">
            <FaChevronDown
              color="white"
              className={`transition-transform ${show ? "rotate-180" : ""}`}
            />
          </p>
        </button>
      </div>
      <div
        className={`flex flex-col overflow-y-hidden ${!show ? "max-h-0" : "max-h-96"} bg-slate-200 transition-all duration-100 ease-in-out`}
      >
        <div className="relative p-4">
          <label
            className="absolute left-0 ml-1 -translate-y-3 bg-slate-200 px-1 text-sm"
            htmlFor="AgentNotes"
          >
            Enter Your Notes
          </label>
          <textarea
            className="h-32 w-full rounded-sm border border-blue-700 bg-transparent p-3 leading-tight"
            name=""
            id=""
          ></textarea>
        </div>
        <button className="w-full bg-green-400 py-2 font-bold">Wrap up</button>
      </div>
    </>
  );
};

export default AgentNotes;
