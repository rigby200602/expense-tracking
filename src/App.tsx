import Sidebar from "./components/Sidebar"
import SidebarItem from "./components/SidebarItem"
import { FaHome, FaChartLine, FaWallet, FaCog } from "react-icons/fa";


function App() {

  return (
    <>
      <Sidebar>
        <SidebarItem icon={<FaHome />} label="Home" active={true} />
        <SidebarItem icon={<FaChartLine />} label="Analytics" />
        <SidebarItem icon={<FaWallet />} label="Wallet" />
        <SidebarItem icon={<FaCog />} label="Settings" />
      </Sidebar>
    </>
  )
}

export default App
