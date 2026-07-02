// Using ReactNode as a type for children prop
import type { ReactNode } from "react";

type SidebarItemProps = {
  icon: ReactNode;
  label: string;
  active?: boolean;
};
// This sidebar item component takes in an icon, label, and an optional active prop to indicate if the item is currently active.
// It uses Tailwind CSS classes for styling and includes hover effects for better user experience.
import { useAppContext } from "../../context/AppContext";

const SidebarItem = ({ icon, label, active }: SidebarItemProps) => {
  const { isCollapsed } = useAppContext();

  return (
    <li
      className={`group relative flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-gray-700 transition-all duration-300 ease-in-out ${active ? "bg-gray-700" : ""}`}
    >
      <div className="shrink-0 text-3xl text-white">{icon}</div>
      <span
        className={`overflow-hidden whitespace-nowrap text-white font-medium
          transition-all duration-300 ease-in-out ${
            isCollapsed ? "w-0 opacity-0" : "w-40 opacity-100"
          }`}
      >
        {label}
      </span>

      {/* When the sidebar is collapsed, the label text is hidden.
      A tooltip appears on hover with a smooth fade and slide-in effect. */}
      {isCollapsed && (
        <div
          className="absolute left-full ml-3 rounded-md bg-gray-700 
        px-2 py-1 text-sm text-white opacity-0 
        invisible -translate-x-3 transition-all duration-300 ease-in-out 
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-3"
        >
          {label}
        </div>
      )}
    </li>
  );
};

export default SidebarItem;
