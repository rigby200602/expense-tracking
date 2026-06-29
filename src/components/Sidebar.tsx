import logo from "../assets/logo.png"

const Sidebar = () => {
  return (
    <aside className="h-screen">
        <nav className="h-full flex flex-col border-r bg-white shadow-sm">
            <div className="p-4 pb-2 flex items-center gap-3">
              <img src={logo} alt="logo" className="w-12" />
              <span className="text-lg font-semibold">FinTracker</span>
            </div>
        </nav>
    </aside>
  )
}

export default Sidebar