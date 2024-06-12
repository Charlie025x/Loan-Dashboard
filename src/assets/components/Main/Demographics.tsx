import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Selector from "./Selector";

const Demographics = () => {
  const [show, setShow] = React.useState(true);
  const handleClick = () => setShow((prevState) => !prevState);
  return (
    <div>
      {/* title */}
      <div className="grid min-h-[calc(1.33rem+16px)] grid-cols-[1fr_auto] items-center justify-between bg-blue-700">
        <button className="flex justify-between" onClick={handleClick}>
          <p className="ml-2 text-white">Demographics - Verified</p>
          <p className="mx-2 rounded-full border p-1">
            <FaChevronDown
              className={`transition-transform ${show ? "rotate-180" : ""}`}
            />
          </p>
        </button>
      </div>
      {/* drop down */}
      <div
        className={`pannel w-full overflow-y-hidden bg-slate-200 ${!show ? "max-h-0" : "max-h-[80rem]"} transition-all duration-100 ease-in-out`}
      >
        <div className="overflow-y-auto">
          <div className="flex flex-wrap gap-2 p-2 [&>div]:lg:grow [&>div]:lg:basis-1/4">
            {/* address */}
            <div className="w-full border border-black p-2">
              <h4 className="mb-6 font-bold">Address - Unverified</h4>

              <div className="flex flex-wrap gap-4">
                <div className="relative">
                  <label
                    className="absolute left-0 ml-1 -translate-y-3 bg-slate-200 px-1 text-sm"
                    htmlFor="InteractionType"
                  >
                    Country
                  </label>
                  <input
                    className="w-full rounded-sm border border-blue-700 bg-transparent p-1"
                    type="text"
                    name=""
                    id=""
                    value="United States"
                  />
                </div>
                <div className="relative basis-full">
                  <label
                    className="absolute left-0 ml-1 -translate-y-3 bg-slate-200 px-1 text-sm"
                    htmlFor="InteractionType"
                  >
                    Address Line 1
                  </label>
                  <input
                    className="w-full rounded-sm border border-blue-700 bg-transparent p-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="relative basis-full">
                  <label
                    className="absolute left-0 ml-1 -translate-y-3 bg-slate-200 px-1 text-sm"
                    htmlFor="InteractionType"
                  >
                    Address Line 2
                  </label>
                  <input
                    className="w-full rounded-sm border border-blue-700 bg-transparent p-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="relative basis-full">
                  <label
                    className="absolute left-0 ml-1 -translate-y-3 bg-slate-200 px-1 text-sm"
                    htmlFor="InteractionType"
                  >
                    City
                  </label>
                  <input
                    className="w-full rounded-sm border border-blue-700 bg-transparent p-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="relative basis-1/5">
                  <label
                    className="absolute left-0 ml-1 -translate-y-3 bg-slate-200 px-1 text-sm"
                    htmlFor="InteractionType"
                  >
                    State
                  </label>
                  <input
                    className="w-full rounded-sm border border-blue-700 bg-transparent p-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="relative basis-1/5">
                  <label
                    className="absolute left-0 ml-1 -translate-y-3 bg-slate-200 px-1 text-sm"
                    htmlFor="InteractionType"
                  >
                    Zip
                  </label>
                  <input
                    className="w-full rounded-sm border border-blue-700 bg-transparent p-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="relative mb-4 basis-1/2">
                  <label
                    className="absolute left-0 ml-1 -translate-y-3 bg-slate-200 px-1 text-sm"
                    htmlFor="InteractionType"
                  >
                    Source
                  </label>
                  <input
                    className="w-full rounded-sm border border-blue-700 bg-transparent p-1"
                    type="text"
                    name=""
                    id=""
                    value="Borrower"
                  />
                </div>
              </div>

              <button className="bg-green-300">Verify Address</button>
            </div>

            <div className="w-full border border-black p-2">
              <h4 className="mb-6">Phone Numbers - Unverified</h4>
              <div className="relative mb-4">
                <label
                  className="absolute left-0 ml-1 -translate-y-3 bg-slate-200 px-1 text-sm"
                  htmlFor="InteractionType"
                >
                  Primary Number
                </label>
                <input
                  className="w-full rounded-sm border border-blue-700 bg-transparent p-1"
                  type="text"
                  name=""
                  id=""
                  value="(XXX) XXX - XXXX"
                />
              </div>
              <button className="bg-green-300">Verify Email</button>
            </div>

            <div className="flex w-full flex-wrap gap-2">
              <div className="grow border border-black p-2">
                <h4 className="mb-6">Email - Unverified</h4>
                <div className="relative mb-4">
                  <label
                    className="absolute left-0 ml-1 -translate-y-3 bg-slate-200 px-1 text-sm"
                    htmlFor="InteractionType"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full rounded-sm border border-blue-700 bg-transparent p-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <button className="bg-green-300">Verify Email</button>
              </div>
              <div className="grow border border-black p-2">
                <h4 className="mb-6">Latest Enrollment</h4>
                <p>Graduated</p>
                <p>Since 06/01/2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demographics;
