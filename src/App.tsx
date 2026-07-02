import Sidebar from "./components/Sidebar/Sidebar";
import SidebarItem from "./components/Sidebar/SidebarItem";
import Navbar from "./components/Navbar";
import {
  FaHome,
  FaChartLine,
  FaWallet,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<FaHome />} label="Home" />
        <SidebarItem icon={<FaChartLine />} label="Analytics" />
        <SidebarItem icon={<FaWallet />} label="Wallet" />
        <SidebarItem icon={<FaCog />} label="Settings" />
        <SidebarItem icon={<FaQuestionCircle />} label="Help" />
      </Sidebar>
      <div className="flex-1 p-4 text-white">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
