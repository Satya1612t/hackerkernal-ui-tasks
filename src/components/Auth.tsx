import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import LabelInput from "./LabelInput";
import Quote from "./Quote";

function Auth() {
  const { login, isAuthenticated } = useAuth();
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [isLogging, setIsLogging] = useState(false);

  const handleLogin = async () => {
    setIsLogging(true)
    const loading = toast.loading("Authenticating...");

    try {
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL, userInput);
      const token = response.data?.token;
      if (!token) {
        return toast.error('error while fetching... check server')
      }
      login(token);
    } catch (error) {
      console.log(error);
    }
    finally {
      setIsLogging(false)
      toast.dismiss(loading)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      <Navigate to={'/'} />
    }
  }, [isAuthenticated])

  if (isAuthenticated) {
    return <Navigate to='/' />
  }

  return (
    <>
      <div className="max-w-full grid lg:grid-cols-2 grid-cols-1 h-screen">
        <div className=" h-screen max-w-full flex items-center justify-center bg-slate-200 ">
          {isLogging ? "" :
            <div className="max-w-80 text-wrap text-left py-4 px-8 border border-gray-400 rounded-md hover:shadow-md ">
              <h1 className="text-black  font-bold text-2xl ">Login here</h1>
              <h1 className="font-normal text-slate-700 text-sm mb-4" > Don't Have an account <span className="underline">Create now</span></h1>
              <div className="space-y-3">
                <LabelInput name="Email" placeholder="Enter your email" type="email" onChange={(e) => setUserInput({
                  ...userInput,
                  email: e.target.value
                })} />
                <LabelInput name="Password" placeholder="Enter your Password" type="password" onChange={(e) => setUserInput({
                  ...userInput,
                  password: e.target.value
                })} />
                <button className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-6 py-2.5  me-2 mb-2" onClick={handleLogin}>Login</button>
              </div>
            </div>}
        </div>
        <Quote />
      </div>
    </>
  )

}



export default Auth