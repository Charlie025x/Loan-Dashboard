import React from "react";
import { FaChevronDown, FaExternalLinkAlt, FaUser } from "react-icons/fa";
import { MdOutlineWarning } from "react-icons/md";

const Main = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow((prevState) => !prevState);
  return (
    <div className="overflow-x-hidden">
      <div className="grid min-h-full grid-rows-[auto_1fr] bg-red-400">
        <div className="bg-slate-800 text-white">hi</div>
        <div className="p-6 [&>div]:mb-4">
          <div>
            {/* title */}
            <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[1fr_auto] items-center justify-between bg-blue-700">
              <button className="flex justify-between" onClick={handleClick}>
                <p className="bg-slate-200">Demographics - Verified</p>
                <p className="mx-2 rounded-full border p-1">
                  <FaChevronDown
                    className={`transition-transform ${show ? "rotate-180" : ""}`}
                  />
                </p>
              </button>
            </div>
            {/* drop down */}
            <div
              className={`pannel w-full overflow-y-hidden bg-slate-200 ${!show ? "max-h-0" : "max-h-full"} transition-all duration-100 ease-in-out`}
            >
              <div className="overflow-y-auto">
                <div className="flex flex-wrap gap-2 p-2 [&>div]:lg:grow [&>div]:lg:basis-1/4">
                  <div className="w-full border border-black p-2">
                    <h4 className="mb-6">Address - Unverified</h4>
                    Country United States of America Address Line 1 Address Line
                    2 City State Zip Source
                  </div>

                  <div className="w-full border border-black">
                    <h4>Phone Numbers - Unverified</h4>
                    <button className="bg-green-300">Verify Address</button>
                  </div>

                  <div className="flex w-full flex-wrap gap-2">
                    <div className="border border-black">
                      <h4>Email - Unverified</h4>
                      <button className="bg-green-300">Verify Address</button>
                    </div>
                    <div className="border border-black">
                      <h4>Latest Enrollment</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* title */}
            <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[1fr_auto] items-center justify-between bg-blue-700">
              <button className="flex justify-between" onClick={handleClick}>
                <p className="bg-slate-200">Account Summary</p>
                <p className="mx-2 rounded-full border p-1">
                  <FaChevronDown />
                </p>
              </button>
            </div>
            {/* drop down */}
            <div className="pannel w-full bg-slate-200 p-4">
              <div className="flex flex-wrap gap-2">
                <div className="message flex w-full items-center border border-red-500">
                  <span className="bg-red-500 p-2">
                    <MdOutlineWarning />
                  </span>
                  <p>
                    {" "}
                    The borrower is on Auto Debit. Please see the Due Date and
                    Monthly Payment Amount in the Accounts section below.
                  </p>
                </div>
                <div className="flex w-full flex-wrap bg-green-300">
                  <div className="grow p-4">
                    <div className="border-b border-black text-center">
                      Loan Dash Account # XXXXXXXXXXX
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
                      <div className="grow border border-black p-4">
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex bg-slate-600">
                <h4 className="">Groups</h4> <FaChevronDown />
              </div>
              <div>
                <div className="flex flex-col justify-stretch border-4 border-black">
                  <h5 className="bg-slate-400 px-2 py-1">Group AA</h5>

                  <div className="flex grow flex-wrap justify-between gap-2 px-2 py-1 [&>div]:bg-amber-200">
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

                  <div className="block">
                    <p className="inline px-2 py-1">BalanceDetails</p>
                    <FaChevronDown className="inline" />
                  </div>

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

                  <div className="block">
                    <p className="inline px-2 py-1">Show Loans In this Group</p>
                    <FaChevronDown className="inline" />
                  </div>
                  {/* grid-cols-[repeat(auto-fit,minmax(3rem,1fr))] */}
                  {/* auto-cols-[minmax(4rem,auto)] */}
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
              </div>
            </div>
          </div>

          <div>
            {/* title */}
            <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[1fr_auto] items-center justify-between bg-blue-700">
              <button className="flex justify-between" onClick={handleClick}>
                <p className="bg-slate-200">Borrower Activity</p>
                <p className="mx-2 rounded-full border p-1">
                  <FaChevronDown
                    className={`transition-transform ${show ? "rotate-180" : ""}`}
                  />
                </p>
              </button>
            </div>
            {/* drop down */}
            <div className="flex border-spacing-4 flex-col justify-stretch border-4 bg-slate-200 p-4">
              {/* grid-cols-[repeat(auto-fit,minmax(3rem,1fr))] */}
              {/* auto-cols-[minmax(4rem,auto)] */}
              <div className="">
                <div className="grid grid-cols-1">
                  <div className="grid grid-cols-[repeat(3,minmax(auto,1fr))] gap-4 overflow-x-auto">
                    <p>Borrower History</p>
                    <p>Defer/Forb History</p>
                    <p>Payments</p>
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <div className="grid grid-cols-[repeat(5,minmax(auto,1fr))] gap-4 overflow-x-auto border-b-2 border-black">
                    <p>Date</p>
                    <p>Action</p>
                    <p>Description</p>
                    <p>System</p>
                    <p>User</p>
                    {/* <input type="search" name="" placeholder="Search" id="" />
                      <input type="search" name="" placeholder="Search" id="" />
                      <input type="search" name="" placeholder="Search" id="" />
                      <input type="search" name="" placeholder="Search" id="" />
                      <input type="search" name="" placeholder="Search" id="" /> */}
                    <p>06-02-2024 05:06:20 AM</p>
                    <p>993</p>
                    <p></p>
                    <p>ED</p>
                    <p>JohnDoe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
