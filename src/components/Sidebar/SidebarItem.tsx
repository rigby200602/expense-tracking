import type { SidebarData } from "../../assets/testData";
import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router";

const SidebarItem = ({ Icon, label, url, active }: SidebarData) => {
  const { isCollapsed } = useAppContext();

  return (
    <li
      className={`group relative flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-gray-700 transition-all duration-300 ease-in-out ${active ? "bg-gray-700" : ""}`}
    >
      <div className="shrink-0 text-3xl text-white">
        <Link to={`/${url}`}>
          <Icon/>
        </Link>
      </div>
      <span
        className={`overflow-hidden whitespace-nowrap text-white font-medium
          transition-all duration-300 ease-in-out ${
            isCollapsed ? "w-0 opacity-0" : "w-40 opacity-100"
          }`}
      >
        <Link to={`/${url}`}>
          {label}
        </Link>
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
