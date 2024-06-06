import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdNoteAlt } from "react-icons/md";

const AgentNotes = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow((prevState) => !prevState);
  return (
    <>
      <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[auto_1fr_auto] items-center justify-between">
        <div className="flex items-center self-stretch rounded-r-md px-4">
          <MdNoteAlt className="" />
        </div>
        <button className="flex justify-between" onClick={handleClick}>
          <p className="bg-slate-200">Agent Notes</p>
          <p className="mx-2 rounded-full border p-1">
            <FaChevronDown
              className={`transition-transform ${show ? "rotate-180" : ""}`}
            />
          </p>
        </button>
      </div>
      <div
        className={`flex flex-col overflow-y-hidden ${!show ? "max-h-0" : "max-h-96"} bg-slate-200`}
      >
        <div className="p-2">
          <label htmlFor="AgentNotes">Enter Your Notes</label>
          <input type="text" name="" id="" />
        </div>
      </div>
    </>
  );
};

export default AgentNotes;
