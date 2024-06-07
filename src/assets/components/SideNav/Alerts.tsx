import React from "react";
import { FaBell } from "react-icons/fa";

const Alerts = () => {
  return (
    <>
      <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[auto_1fr_auto] items-center justify-between">
        <div className="flex items-center self-stretch rounded-r-md px-4">
          <FaBell className="" color="white" />
        </div>
        <p className="ml-2 text-white">Borrower Alerts</p>
      </div>
      <div className={`bg-slate-200`}>
        <div className="min-h-32"></div>
      </div>
    </>
  );
};

export default Alerts;
