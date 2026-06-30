import logo from "../assets/logo.png";

const Sidebar = ({}) => {
  return (
    <div className="h-screen">
      <div className="max-w-1/6 h-full flex flex-col border-r border-gray-700 bg-[#0A0F16] shadow-sm">
        <div className="p-4 pb-2 flex items-center gap-3 ">
          <img src={logo} alt="logo" className="w-12 cursor-pointer" />
          <span className="text-lg text-white font-semibold cursor-pointer">
            FinTracker
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
