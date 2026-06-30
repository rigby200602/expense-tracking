import Sidebar from "./components/Sidebar"
import SidebarItem from "./components/SidebarItem"
import { FaHome, FaChartLine, FaWallet, FaCog, FaQuestionCircle } from "react-icons/fa";


function App() {

  return (
    <>
      <Sidebar>
        <SidebarItem icon={<FaHome />} label="Home" />
        <SidebarItem icon={<FaChartLine />} label="Analytics" />
        <SidebarItem icon={<FaWallet />} label="Wallet" />
        <SidebarItem icon={<FaCog />} label="Settings" />
        <SidebarItem icon={<FaQuestionCircle />} label="Help" />
      </Sidebar>
    </>
  )
}

export default App
