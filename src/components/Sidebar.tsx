import logo from "../assets/logo.png"

const Sidebar = () => {
  return (
    <aside className="h-screen">
        <nav className="h-full flex flex-col border-r border-white shadow-sm">
            <div className="p-4 pb-2 flex justify-between items-center">
                <img src={logo} className="w-12"/>
            </div>
        </nav>
    </aside>
  )
}

export default Sidebar