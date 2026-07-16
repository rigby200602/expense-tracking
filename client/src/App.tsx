import Sidebar from "./components/Sidebar/Sidebar";
import SidebarItem from "./components/Sidebar/SidebarItem";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import { sidebarData as data } from "../src/assets/testData";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar>
        {data.map((item) => (
          <SidebarItem
            key={item.label}
            Icon={item.Icon}
            label={item.label}
            url={item.url}
          />
        ))}
      </Sidebar>
      <div className="flex-1">
        <div className="flex justify-end">
          <Navbar />
        </div>
        <div className="w-full p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
