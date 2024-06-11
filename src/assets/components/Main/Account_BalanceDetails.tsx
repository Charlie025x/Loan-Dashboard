import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Account_BalanceDetails = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow((prevState) => !prevState);
  return (
    <>
      <div className="block">
        <button
          className="flex items-center justify-between"
          onClick={handleClick}
        >
          <p className="inline px-2 py-1">BalanceDetails</p>
          <FaChevronDown
            className={`inline transition-transform ${show ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      {``}

      <div
        className={`pannel w-full overflow-y-hidden ${!show ? "max-h-0" : "max-h-[70rem]"} transition-all duration-100 ease-in-out`}
      >
        <div className="flex grow flex-wrap justify-between gap-2 px-2 py-1 [&>div]:bg-amber-200">
          <div className="flex grow flex-col flex-wrap">
            <div className="flex flex-wrap justify-between">
              <p className="inline">Outstanding Principal:</p>
              <p>$XX,XXX.XX</p>
            </div>
            <div className="flex flex-wrap justify-between">
              <p className="inline">Outstanding Interest:</p>
              <p>$XXX.XX</p>
            </div>
            <div className="flex flex-wrap justify-between">
              <p className="inline">Outstanding Fees:</p>
              <p>The Department of Education</p>
            </div>
            <div className="flex flex-wrap justify-between">
              <p className="inline">Original Balance:</p>
              <p>$X,XXX.XX</p>
            </div>
          </div>
          <div className="flex grow flex-col flex-wrap justify-between">
            <div className="flex flex-wrap justify-between">
              <p className="inline">Daily Interest Accrual:</p>
              <p>$X.XX</p>
            </div>
            <div className="flex flex-wrap justify-between">
              <p className="inline">Capped Interest Amount:</p>
              <p>$X,XXX.XX</p>
            </div>
            <div className="flex flex-wrap justify-between">
              <p className="inline">Interest Paid YTD:</p>
              <p>$X,XXX.XX</p>
            </div>
            <div className="flex flex-wrap justify-between">
              <p className="inline">Principal Paid YTD:</p>
              <p>$X,XXX.XX</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account_BalanceDetails;
