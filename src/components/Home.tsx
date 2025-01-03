import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider"
import Navigation from "./Navigation";
import Aside from "./Aside";
import Body from "./Body";
import { useState } from "react";


function Home() {
  const { isAuthenticated } = useAuth()
  const [activeMenuItem, setActiveMenuItem] = useState<string>('Products');

  if (!isAuthenticated) {
    return <Navigate to='/login' />
  }

  return (
    <main className="w-full h-screen">
      <Navigation />
      <div className="w-full bg-slate-600 h-[calc(100vh-66px)] flex">
        <Aside setActiveMenuItem={setActiveMenuItem} activeMenuItem={activeMenuItem} />
        <div className="flex-1 p-2 bg-slate-200">
          <Body activeMenuItem={activeMenuItem} />
        </div>
      </div>
    </main>
  )
}

export default Home