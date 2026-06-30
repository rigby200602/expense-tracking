// Using ReactNode as a type for children prop
import type { ReactNode } from "react";
type SidebarProps = {
  children: ReactNode;
};

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";


const Sidebar = ({children} : SidebarProps ) => {
  
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  return (
    <div className="h-screen">
      <div className="max-w-1/6 h-full flex flex-col border-r border-gray-700 bg-[#0A0F16] shadow-sm">
        <div className="p-4 pb-2 flex items-center gap-3 ">
          <img src="/src/assets/logo.png" alt="logo" className={
            `overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0" : "w-12"}`
          }/>
          <span className="text-lg text-white font-semibold cursor-pointer">
            FinTracker
          </span>
          <button onClick={() => setIsCollapsed(curr => !curr)}
          className="text-white text-4xl ml-auto cursor-pointer hover:text-gray-400 transition-colors duration-300">
            {isCollapsed ? <FaArrowAltCircleLeft /> : <FaArrowAltCircleRight />}
          </button>
        </div>
        <ul className="flex flex-col gap-2 p-4 text-gray-400">
          {children}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
