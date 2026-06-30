// Using ReactNode as a type for children prop
import type { ReactNode } from "react";

type SidebarItemProps = {
  icon: ReactNode;
  label: string;
  active?: boolean;
};
// This sidebar item component takes in an icon, label, and an optional active prop to indicate if the item is currently active.
// It uses Tailwind CSS classes for styling and includes hover effects for better user experience.
const SidebarItem = ({ icon, label, active }: SidebarItemProps) => {
  return (
    <li
      className={`flex items-center gap-3 p-2 rounded-md cursor-pointer 
    hover:bg-gray-700 transition-colors duration-300 ${active ? "bg-gray-700" : ""}`}
    >
      {icon}
      <span>{label}</span>
    </li>
  );
};

export default SidebarItem;
