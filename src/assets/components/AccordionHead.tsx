import React from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa";

const AccordionHead = ({ props }) => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[auto_1fr_auto] items-center justify-between">
        <div className="flex items-center self-stretch rounded-r-md bg-green-500 px-4">
          <FaCheck className="" />
        </div>
        <button className="flex justify-between" onClick={props.handleClick}>
          <p className="bg-slate-200">Authenticate</p>
          <p className="mx-2 rounded-full border p-1">
            <FaChevronDown className="rotate-180" />
          </p>
        </button>
      </div>
    </>
  );
};

export default AccordionHead;
