import React from "react";
import Interaction from "./SideNav/Interaction";
import Authenticate from "./SideNav/Authenticate";
import Alerts from "./SideNav/Alerts";
import AgentNotes from "./SideNav/AgentNotes";
import Actions from "./SideNav/Actions";
import { FaChevronRight } from "react-icons/fa";

const SideNav = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow((prevState) => !prevState);
  return (
    <div className="relative h-full overflow-hidden">
      <div
        // className={`$ flex w-10 items-center justify-center bg-blue-700 md:hidden`}
        className={`bottom-0 right-0 top-0 h-full w-10 items-center justify-center bg-blue-700 md:hidden ${show && "absolute"}`}
      >
        <button onClick={handleClick} className="h-full w-full">
          <FaChevronRight
            color="white"
            className={`m-auto transition-transform ${show && "rotate-180"}`}
          />
        </button>
      </div>
      <div
        // className={`h-full w-[100%-2.5rem] overflow-hidden bg-stone-500 md:block ${!show && "hidden"}`}
        className={`h-full w-[100vw] overflow-hidden bg-stone-500 pr-10 md:block md:w-[310px] md:pr-0 ${!show && "hidden"}`}
      >
        <div className="left-pane-wrapper h-full overflow-y-auto overflow-x-hidden">
          <div className="panel-accordion flex flex-col">
            <div className="bg-blue-700">
              <div className="p-4 text-white">
                <div className="mb-2">
                  <div className="flex flex-wrap justify-between">
                    <p>About:</p>
                    <p>XXXXXXX</p>
                  </div>
                  <div className="flex flex-wrap justify-between">
                    <p>SSN:</p>
                    <p>XXX-XX-XXXX</p>
                  </div>
                  <div className="flex flex-wrap justify-between">
                    <p>ED:</p>
                    <p>XXXX-XXXX-XXXX</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm">Account Registered</p>
                </div>
              </div>
              <Interaction />
              <Authenticate />
              <Alerts />
              <AgentNotes />
              <Actions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
