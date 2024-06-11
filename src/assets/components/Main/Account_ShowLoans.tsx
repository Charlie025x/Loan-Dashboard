import React from "react";
import { FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";

const Account_ShowLoans = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow((prevState) => !prevState);
  return (
    <>
      <div className="block">
        <button
          className="flex items-center justify-between"
          onClick={handleClick}
        >
          <p className="inline px-2 py-1">Show Loans In this Group</p>
          <FaChevronDown
            className={`inline transition-transform ${show ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      {/* grid-cols-[repeat(auto-fit,minmax(3rem,1fr))] */}
      {/* auto-cols-[minmax(4rem,auto)] */}

      <div
        className={`pannel w-full overflow-y-hidden ${!show ? "max-h-0" : "max-h-[70rem]"} transition-all duration-100 ease-in-out`}
      >
        <div className="px-2 py-1">
          <div className="grid grid-cols-1 bg-lime-300">
            <div className="grid grid-cols-[repeat(9,minmax(auto,1fr))] gap-4 overflow-x-auto [&>p]:px-0">
              <p>Loan#</p>
              <p>Subsidy</p>
              <p>Comaker</p>
              <p>Intereest Rate</p>
              <p>Principal</p>
              <p>Interest</p>
              <p>Fees</p>
              <p>Balance</p>
              <p>Details</p>
              <p>1</p>
              <p>Unsubsidized</p>
              <p></p>
              <p>6.5%</p>
              <p>$XX,XXX.XX</p>
              <p>$XXX.XX</p>
              <p>10.00</p>
              <p>$XX,XXX.XX</p>
              <FaExternalLinkAlt className="mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account_ShowLoans;
