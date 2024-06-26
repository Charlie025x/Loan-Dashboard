import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Account_BalanceDetails from "./Account_BalanceDetails";
import Account_ShowLoans from "./Account_ShowLoans";

const Account_Group = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow((prevState) => !prevState);
  return (
    <>
      <div className="">
        <button
          className="flex items-center justify-between"
          onClick={handleClick}
        >
          <h5 className="text-2xl text-blue-700">Groups</h5>
          <FaChevronDown
            className={`ml-2 transition-transform ${show ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      <div
        className={`pannel w-full overflow-y-hidden ${!show ? "max-h-0" : "max-h-[70rem]"} transition-all duration-100 ease-in-out`}
      >
        <div className="flex flex-col justify-stretch overflow-hidden rounded-md border-2 border-black">
          <h5 className="bg-slate-400 px-2 py-1">Group AA</h5>

          <div className="flex grow flex-wrap justify-between gap-5 bg-slate-300 px-2 py-1">
            <div className="flex grow flex-col flex-wrap">
              <div className="flex flex-wrap justify-between">
                <p>Loan Type:</p>
                <p>subsidized</p>
              </div>
              <div className="flex flex-wrap justify-between">
                <p>Repayment Plan:</p>
                <p>Standard</p>
              </div>
              <div className="flex flex-wrap justify-between">
                <p>Lender:</p>
                <p>The Department of Education</p>
              </div>
              <div className="flex flex-wrap justify-between">
                <p>Outstanding Balance:</p>
                <p>$X,XXX.XX</p>
              </div>
            </div>
            <div className="flex grow flex-col flex-wrap justify-between">
              <div className="flex flex-wrap justify-between">
                <p>Past Due:</p>
                <p>$X,XXX.XX since 01/01/2024</p>
              </div>
              <div className="flex flex-wrap justify-between">
                <p>Amount:</p>
                <p>$X,XXX.XX</p>
              </div>
              <div className="flex flex-wrap justify-between">
                <p>Outstanding Balance:</p>
                <p>$X,XXX.XX</p>
              </div>
              <div className="flex flex-wrap justify-between">
                <p>Outstanding Balance:</p>
                <p>$X,XXX.XX</p>
              </div>
            </div>
          </div>

          <Account_BalanceDetails />

          <Account_ShowLoans />
        </div>
      </div>
    </>
  );
};

export default Account_Group;
