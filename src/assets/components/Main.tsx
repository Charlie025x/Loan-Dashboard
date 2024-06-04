import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Main = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="grid h-full grid-rows-[auto_1fr] bg-red-400">
        <div className="bg-slate-800 text-white">hi</div>
        <div className="p-6">
          {/* title */}
          <div className="flex min-h-[calc(1.33rem+16px)] grid-cols-[auto_1fr] items-center justify-between bg-blue-700">
            <p className="bg-slate-200">Demographics - Verified</p>
            <p className="mx-2 rounded-full border p-1">
              <FaChevronDown />
            </p>
          </div>
          {/* drop down */}
          <div className="pannel w-full bg-slate-200 p-1">
            <div className="flex flex-wrap gap-2">
              <div className="w-full border border-black">
                <h4>Address - Unverified</h4>
                <button className="bg-green-300">Verify Address</button>
              </div>
              <div className="w-full border border-black">
                <h4>Phone Numbers - Unverified</h4>
                <button className="bg-green-300">Verify Address</button>
              </div>
              <div className="flex w-full gap-2">
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

          {/* title */}
          <div className="flex min-h-[calc(1.33rem+16px)] grid-cols-[auto_1fr] items-center justify-between bg-blue-700">
            <p className="bg-slate-200">Account Summary</p>
            <p className="mx-2 rounded-full border p-1">
              <FaChevronDown />
            </p>
          </div>
          {/* drop down */}
          <div className="pannel w-full bg-slate-200 p-1">
            <div className="flex flex-wrap gap-2">
              <div className="message w-full border border-red-500">
                message
              </div>
              <div className="flex w-full flex-wrap">
                <div className="p-4">
                  <div className="w-full border-b border-black">
                    Loan Dash Account # XXXXXXXXXXX
                  </div>
                  <div className="flex flex-wrap">
                    <div>
                      <p>Past Due Amounts:</p>
                      <p>Regular Monthly Payments:</p>
                      <p>Amount Already PAid for This Month</p>
                      <p>Monthly Payment Remaining:</p>
                      <p>Current Amount Due:</p>
                      <p>Upcoming Due Date:</p>
                    </div>
                    <div>
                      <h5>Outstanding</h5>
                      <p>Principal:</p>
                      <p>Interest:</p>
                      <p>Fees:</p>
                      <p>Current Balance</p>
                    </div>
                  </div>
                </div>
                <div className="border border-black p-4">
                  <div className="flex flex-col">
                    <h5>Status Overview</h5>
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
            <div className="flex bg-slate-600">
              <h4 className="">Groups</h4> <FaChevronDown />
            </div>
            <div>
              <div className="flex flex-col justify-stretch border-4 border-pink-400">
                <h5 className="bg-slate-400">Group AA</h5>
                <div className="flex flex-wrap border-2 border-purple-800 bg-yellow-300">
                  <div className="flex w-full flex-col">
                    <div className="flex flex-wrap justify-between">
                      <div className="flex flex-grow flex-wrap border border-white">
                        <div className="flex w-full flex-wrap justify-between">
                          <p className="inline">Loan Type:</p>
                          <p>subsidized</p>
                        </div>
                        <div className="flex w-full flex-wrap justify-between">
                          <p className="inline">Repayment Plan:</p>
                          <p>Standard</p>
                        </div>
                        <div className="flex w-full flex-wrap justify-between">
                          <p className="inline">Lender:</p>
                          <p>The Department of Education</p>
                        </div>
                        <div className="flex w-full flex-wrap justify-between">
                          <p className="inline">Outstanding Balance:</p>
                          <p>$X,XXX.XX</p>
                        </div>
                      </div>
                      <div className="flex flex-grow flex-wrap justify-between border border-white">
                        <div className="flex w-full flex-wrap justify-between">
                          <p className="inline">Past Due:</p>
                          <p>$X,XXX.XX since 01/01/2024</p>
                        </div>
                        <div className="flex w-full flex-wrap justify-between">
                          <p className="inline">Amount:</p>
                          <p>$X,XXX.XX</p>
                        </div>
                        <div className="flex w-full flex-wrap justify-between">
                          <p className="inline">Outstanding Balance:</p>
                          <p>$X,XXX.XX</p>
                        </div>
                        <div className="flex w-full flex-wrap justify-between">
                          <p className="inline">Outstanding Balance:</p>
                          <p>$X,XXX.XX</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <p className="inline">BalanceDetails</p>
                  <FaChevronDown className="inline" />
                </div>
                <div className="flex flex-wrap border-2 border-purple-800 bg-yellow-300">
                  <div className="flex w-full flex-col">
                    <div className="flex flex-wrap justify-between">
                      <div className="flex flex-grow flex-wrap border border-white">
                        <div className="flex w-full flex-wrap justify-between">
                          <p className="inline">Outstanding Principal:</p>
                          <p>$XX,XXX.XX</p>
                        </div>
                        <div className="flex w-full flex-wrap justify-between">
                          <p className="inline">Outstanding Interest:</p>
                          <p>$XXX.XX</p>
                        </div>
                        <div className="flex w-full flex-wrap justify-between">
                          <p className="inline">Outstanding Fees:</p>
                          <p>The Department of Education</p>
                        </div>
                        <div className="flex w-full flex-wrap justify-between">
                          <p className="inline">Original Balance:</p>
                          <p>$X,XXX.XX</p>
                        </div>
                      </div>
                      <div className="flex flex-grow flex-wrap justify-between border border-white">
                        <div className="flex w-full flex-wrap justify-between">
                          <p className="inline">Daily Interest Accrual:</p>
                          <p>$X.XX</p>
                        </div>
                        <div className="flex w-full flex-wrap justify-between">
                          <p className="inline">Capped Interest Amount:</p>
                          <p>$X,XXX.XX</p>
                        </div>
                        <div className="flex w-full flex-wrap justify-between">
                          <p className="inline">Interest Paid YTD:</p>
                          <p>$X,XXX.XX</p>
                        </div>
                        <div className="flex w-full flex-wrap justify-between">
                          <p className="inline">Principal Paid YTD:</p>
                          <p>$X,XXX.XX</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <p className="inline">Show Loans In this Group</p>
                  <FaChevronDown className="inline" />
                </div>
                {/* grid-cols-[repeat(auto-fit,minmax(3rem,1fr))] */}
                {/* auto-cols-[minmax(4rem,auto)] */}
                <div className="">
                  <div className="grid grid-cols-1">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex bg-slate-600">
              <h4 className="">Borrower Activity</h4> <FaChevronDown />
            </div>
            <div>
              <div className="flex flex-col justify-stretch border-4 border-pink-400">
                {/* grid-cols-[repeat(auto-fit,minmax(3rem,1fr))] */}
                {/* auto-cols-[minmax(4rem,auto)] */}
                <div className="">
                  <div className="grid grid-cols-1">
                    <div className="grid grid-cols-[repeat(3,minmax(auto,1fr))] gap-4 overflow-x-auto border-b-2 border-black">
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
    </div>
  );
};

export default Main;
