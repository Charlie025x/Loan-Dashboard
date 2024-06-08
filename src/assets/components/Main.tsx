import React from "react";
import { FaChevronDown, FaExternalLinkAlt, FaUser } from "react-icons/fa";
import { MdOutlineWarning } from "react-icons/md";
import Demographics from "./Main/Demographics";
import AccountSummary from "./Main/AccountSummary";
import Activity from "./Main/Activity";

const Main = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow((prevState) => !prevState);
  return (
    <div className="overflow-x-hidden">
      <div className="grid min-h-full grid-rows-[auto_1fr] bg-red-400">
        <div className="bg-slate-800 text-white">hi</div>
        <div className="p-6 [&>div]:mb-4">
          <Demographics />
          <AccountSummary />
          <Activity />
        </div>
      </div>
    </div>
  );
};

export default Main;
