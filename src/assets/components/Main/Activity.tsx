import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Activity = () => {
  const [show, setShow] = React.useState(true);
  const handleClick = () => setShow((prevState) => !prevState);

  return (
    <div>
      {/* title */}
      <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[1fr_auto] items-center justify-between bg-blue-700">
        <button className="flex justify-between" onClick={handleClick}>
          <p className="ml-2 text-white">Borrower Activity</p>
          <p className="mx-2 rounded-full border p-1">
            <FaChevronDown
              className={`transition-transform ${show ? "rotate-180" : ""}`}
            />
          </p>
        </button>
      </div>
      {/* drop down */}
      <div
        className={`overflow-y-hidden bg-slate-200 ${!show ? "max-h-0" : "max-h-[140rem]"} transition-all duration-100 ease-in-out`}
      >
        <div
          className={`flex border-spacing-4 flex-col justify-stretch border-4 bg-slate-200 p-4`}
        >
          <div className="">
            <div className="grid grid-cols-1">
              <div className="mb-6 grid grid-cols-[repeat(3,minmax(auto,1fr))] gap-4 overflow-x-auto">
                <button className="border-b-2 border-blue-700">
                  Borrower History
                </button>
                <button>Defer/Forb History</button>
                <button>Payments</button>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="grid grid-cols-[repeat(5,minmax(auto,1fr))] overflow-x-auto [&>*]:p-2">
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
                <p className="bg-slate-500">06-28-2024 05:06:20 AM</p>
                <p className="bg-slate-500">Process</p>
                <p className="bg-slate-500">Income Driven Plan approved.</p>
                <p className="bg-slate-500">ED</p>
                <p className="bg-slate-500">JohnDoe</p>

                <p className="">5-28-2024 11:32:14 AM</p>
                <p className="">Inbound Call</p>
                <p className="">
                  Borrower has asked about loan forgiveness terms. Advised of
                  Income Driven Repayment plans and the 25 year term for
                  forgiveness. Sent Borrower a link so she can apply online.
                </p>
                <p className="">ED</p>
                <p className="">JohnDoe</p>

                <p className="bg-slate-500">05-13-2024 05:06:20 AM</p>
                <p className="bg-slate-500">Inbound Call</p>
                <p className="bg-slate-500">
                  Borrower has called in to make her $120.00 monthly payment.
                </p>
                <p className="bg-slate-500">ED</p>
                <p className="bg-slate-500">JohnDoe</p>
                <p className="">05-02-2024 2:11:55 PM</p>
                <p className="">Inbound Call</p>
                <p className="">
                  Borrow requested to change due date from the 1st to the 13th
                  of the month.
                </p>
                <p className="">ED</p>
                <p className="">JohnDoe</p>
                <p className="bg-slate-500">04-01-2024 12:28:44 AM</p>
                <p className="bg-slate-500">Inbound Call</p>
                <p className="bg-slate-500">
                  Borrower has called in to make her $120.00 monthly payment.{" "}
                </p>
                <p className="bg-slate-500">ED</p>
                <p className="bg-slate-500">JohnDoe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
