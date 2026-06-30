// Using ReactNode as a type for children prop
import type { ReactNode } from "react";

type SidebarItemProps = {
  icon: ReactNode;
  label: string;
  active?: boolean;
};
// This sidebar item component takes in an icon, label, and an optional active prop to indicate if the item is currently active.
// It uses Tailwind CSS classes for styling and includes hover effects for better user experience.
import { useAppContext } from "../context/AppContext";

const SidebarItem = ({ icon, label, active }: SidebarItemProps) => {
    
    const {isCollapsed} = useAppContext();
  
    return (
    <li
      className={`flex items-center gap-3 p-2 rounded-md cursor-pointer
    hover:bg-gray-700 transition-colors duration-300 ${active ? "bg-gray-700" : ""}`}
    >
      <div className="text-3xl text-white">{icon}</div>
      <span className={`overflow-hidden text-white ${isCollapsed ? "w-0" : "w-52"}`}>{label}</span>
    </li>
  );
};

export default SidebarItem;
