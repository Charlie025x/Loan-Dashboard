import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = () => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="h-80 w-72 font-medium">
      <div
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between rounded bg-white p-2 ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Country"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`mt-2 overflow-y-auto bg-white ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="sticky top-0 flex items-center bg-white px-2"></div>
        <li
          className={`"bg-sky-600 text-white" "block" "hidden" p-2 text-sm hover:bg-sky-600 hover:text-white`}
          onClick={() => {
            setSelected("United States");
            setOpen(false);
            setInputValue("");
          }}
        >
          United States
        </li>
      </ul>
    </div>
  );
};

export default Selector;
