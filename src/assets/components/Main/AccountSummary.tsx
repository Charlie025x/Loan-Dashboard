import React from "react";
import { FaChevronDown, FaUser } from "react-icons/fa";
import { MdOutlineWarning } from "react-icons/md";
import Account_Group from "./Account_Group";

const AccountSummary = () => {
  const [show, setShow] = React.useState(true);
  const handleClick = () => setShow((prevState) => !prevState);
  return (
    <div>
      {/* title */}
      <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[1fr_auto] items-center justify-between bg-blue-700">
        <button className="flex justify-between" onClick={handleClick}>
          <p className="ml-2 text-white">Account Summary</p>
          <p className="mx-2 rounded-full border p-1">
            <FaChevronDown
              className={`transition-transform ${show ? "rotate-180" : ""}`}
            />
          </p>
        </button>
      </div>
      {/* drop down */}
      <div
        className={`pannel w-full overflow-y-hidden bg-slate-200 ${!show ? "max-h-0" : "max-h-[140rem]"} transition-all duration-100 ease-in-out`}
      >
        <div className="flex flex-wrap gap-2 p-4">
          <div className="message flex w-full items-center border border-red-500">
            <div className="flex items-center self-stretch bg-red-500">
              <span className="p-2">
                <MdOutlineWarning />
              </span>
            </div>
            <p>
              {" "}
              The borrower is on Auto Debit. Please see the Due Date and Monthly
              Payment Amount in the Accounts section below.
            </p>
          </div>
          <div className="flex w-full flex-wrap bg-slate-300">
            <div className="flex grow flex-wrap p-4">
              {/* TODO: remove order on appropiate screen size  */}

              <div className="order-2 basis-full lg:basis-2/3 lg:pr-2">
                <div className="mb-2 border-b-2 border-black text-center">
                  Loan Dash Account # XXXX-XXXX-XXXX
                </div>
                <div className="flex grow flex-wrap gap-2 [&>*]:bg-slate-400">
                  <div className="flex grow flex-col p-2">
                    <div className="flex justify-between">
                      <p>Past Due Amounts:</p>
                      <p>$XXX.XX</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Regular Monthly Payments:</p>
                      <p>$XXX.XX</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Amount Already Paid for This Month</p>
                      <p>$XXX.XX</p>
                    </div>
                    <div className="flex justify-between border-b border-dashed border-black">
                      <p>Monthly Payment Remaining:</p>
                      <p>$XXX.XX</p>
                    </div>
                    <div className="flex justify-between border-b border-dashed border-black">
                      <p>Current Amount Due:</p>
                      <p>$XXX.XX</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Upcoming Due Date:</p>
                      <p>$XXX.XX</p>
                    </div>
                  </div>
                  <div className="flex grow flex-col bg-slate-400 p-2">
                    <div className="flex justify-between">
                      <h5>Outstanding</h5>
                    </div>
                    <div className="flex justify-between border-b border-dashed border-black">
                      <p>Principal:</p>
                      <p>$XXX.XX</p>
                    </div>
                    <div className="flex justify-between border-b border-dashed border-black">
                      <p>Interest:</p>
                      <p>$XXX.XX</p>
                    </div>
                    <div className="flex justify-between border-b border-dashed border-black">
                      <p>Fees:</p>
                      <p>$XXX.XX</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Current Balance</p>
                      <p>$XXX.XX</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* TODO: remove order on appropiate screen size  */}

              <div className="order-1 grow basis-1/3 border border-black p-4 lg:order-3">
                <div className="flex flex-col">
                  <div className="flex items-baseline">
                    <FaUser className="mr-1" />
                    <h5 className="inline">Status Overview</h5>
                  </div>
                  <div className="bg-slate-400">
                    <p>Repayment</p>
                  </div>
                  <div className="flex">
                    <p>Auto Pay</p>
                    <p>Active</p>
                  </div>
                </div>
              </div>

              {/*  */}
            </div>
          </div>
          <Account_Group />
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
