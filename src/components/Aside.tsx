import { Settings } from "lucide-react"
import { SIDEBAR_ITEM } from "../utils/config"
import { ActiveMenuItemProps } from "../utils/types"

function Aside({ setActiveMenuItem, activeMenuItem }: ActiveMenuItemProps) {
  return (
    <aside className="lg:w-60 w-20 border-r h-full py-5 px-2 flex flex-col justify-between ">
      <div className="space-y-3">
        {SIDEBAR_ITEM.map((item, index) => (
          <div onClick={() => setActiveMenuItem(item.name)} className={` ${activeMenuItem === item.name ? "bg-slate-200 rounded-md" : "bg-transparent text-white"} font-medium text-xs  py-2 lg:pl-2 flex gap-3 border-b hover:bg-slate-200 hover:cursor-pointer hover:rounded-md hover:text-black justify-center lg:justify-start items-center"`} key={index}>
            <item.icon size={18} />
            <span className="hidden lg:flex">{item.name}</span>
          </div>
        ))}
      </div>
      <div onClick={() => setActiveMenuItem('Settings')} className={` ${activeMenuItem === "Settings" ? "bg-slate-200 rounded-md" : "bg-transparent text-white"} font-medium text-xs  py-2 lg:pl-2 flex gap-3 border-b hover:bg-slate-200 hover:cursor-pointer hover:rounded-md hover:text-black justify-center lg:justify-start items-center"`} >
        <Settings size={18} />
        <span className="hidden lg:flex">{'Settings'}</span>
      </div>
    </aside>
  )
}

export default Aside