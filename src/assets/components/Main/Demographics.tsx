import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Demographics = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow((prevState) => !prevState);
  return (
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
        className={`pannel w-full overflow-y-hidden bg-slate-200 ${!show ? "max-h-0" : "max-h-[50rem]"} transition-all duration-100 ease-in-out`}
      >
        <div className="overflow-y-auto">
          <div className="flex flex-wrap gap-2 p-2 [&>div]:lg:grow [&>div]:lg:basis-1/4">
            <div className="w-full border border-black p-2">
              <h4 className="mb-6">Address - Unverified</h4>
              Country United States of America Address Line 1 Address Line 2
              City State Zip Source
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
  );
};

export default Demographics;
