import { useAuth } from "../hooks/AuthProvider"
import { StoreIcon } from "lucide-react";

function Navigation() {

  const { logout } = useAuth()

  return (
    <nav className="w-full px-3 py-4 flex justify-between border-b bg-slate-50 shadow-lg">
      <div className="text-xl font-bold flex justify-center items-center gap-4">
        <h1>HackerKernal Store</h1>
        <StoreIcon />
      </div>
      <div className="flex justify-center items-center gap-3">
        <span className="rounded-full px-3 py-[2px] bg-slate-600 text-white flex items-center justify-center text-lg font-light">E</span>
        <button className="bg-red-800 hover:bg-red-900 font-semibold text-white text-xs rounded-lg p-2" onClick={logout}>Logout</button>
      </div>
    </nav>
  )
}

export default Navigation