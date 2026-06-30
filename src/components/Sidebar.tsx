// Using ReactNode as a type for children prop
import type { ReactNode } from "react";
type SidebarProps = {
  children: ReactNode;
};

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

const Sidebar = ({ children }: SidebarProps) => {
  const { isCollapsed, setIsCollapsed } = useAppContext();

  return (
    <div className="h-screen">
      <div className={`h-full flex flex-col border-r border-gray-700 bg-[#0A0F16] shadow-sm
        ${isCollapsed ? "w-20" : "w-64"}`
      }>
        <div className="p-4 pb-2 flex items-center">
          <img
            src="/src/assets/logo.png"
            alt="logo"
            className={`overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0" : "w-12"}`}
          />
          <span
            className={`overflow-hidden transition-all duration-300 ${isCollapsed ? "none" : 
              "text-lg text-white font-semibold cursor-pointer"}`}
          >
            FinTracker
          </span>
          <button
            onClick={() => setIsCollapsed((curr) => !curr)}
            className={` ${isCollapsed ? "ml-1" : "ml-auto"} 
              text-white text-4xl pr-1 cursor-pointer hover:text-gray-400 transition-colors duration-300`}
          >
            {isCollapsed ? <FaArrowAltCircleRight /> : <FaArrowAltCircleLeft />}
          </button>
        </div>
        <ul className="flex flex-col gap-2 p-4 text-gray-400">{children}</ul>
      </div>
    </div>
  );
};

export default Sidebar;
