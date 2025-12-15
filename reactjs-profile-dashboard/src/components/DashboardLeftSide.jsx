import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";


function DashboardLeftSide() {

  const navigation = useNavigate()
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  return (

    <div className={`fixed left-0 top-0 h-screen w-60 border-r flex flex-col py-6 px-4 transition-all duration-300
        ${darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-gray-50 text-black border-gray-300"}`}>

      {/* Logo */}
      <div onClick={() => navigation('/')}
        className={`flex items-center gap-3 cursor-pointer mb-4 pb-4 border-b transition-all duration-300
        ${darkMode ? "border-gray-700" : "border-gray-300"}`}
      >
        <div className="flex flex-row items-center justify-center 
          bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full w-11 h-11 transition ease-in-out duration-500 hover:scale-105 cursor-pointer p-2 shadow-xl"
        >
          <i className="fa-solid fa-layer-group text-[18px] text-gray-200"></i>
        </div>

        <span className={`text-xl md:text-[22px] font-extrabold 
          ${darkMode ? "text-white" : "text-gray-700"}
        `}>
          Profile <span className="text-indigo-400">Dash</span>
        </span>
      </div>

      {/* Navigation */}
      <div className="flex flex-col space-y-4">

        {/* Home */}
        <div
          onClick={() => navigation('/')}
          className={`
            flex items-center font-semibold gap-3 p-2 rounded cursor-pointer transition
            ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-600 hover:bg-gray-100"}
          `}
        >
          <i className="fa-regular fa-house text-lg"></i>
          Home
        </div>

        {/* Profiles */}
        <div
          onClick={() => navigation('/profile')}
          className={`
            flex items-center font-semibold gap-3 p-2 rounded cursor-pointer transition
            ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-600 hover:bg-gray-100"}
          `}
        >
          <i className="fa-regular fa-circle-user text-lg"></i>
          Profiles
        </div>

        {/* Followers */}
        <div
          onClick={() => navigation('/followers')}
          className={`
            flex items-center font-semibold gap-3 p-2 rounded cursor-pointer transition
            ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-600 hover:bg-gray-100"}
          `}
        >
          <i className="fa-solid fa-users text-lg"></i>
          Followers
        </div>

        {/* Hobbies */}
        <div
          onClick={() => navigation('/hobbies')}
          className={`
            flex items-center font-semibold gap-3 p-2 rounded cursor-pointer transition
            ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-600 hover:bg-gray-100"}
          `}
        >
          <i className="fa-regular fa-heart text-lg"></i>
          Hobbies
        </div>

        {/* Settings */}
        <div
          onClick={() => navigation('/setting')}
          className={`
            flex items-center font-semibold gap-3 p-2 rounded cursor-pointer transition
            ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-600 hover:bg-gray-100"}
          `}
        >
          <i className="fa-solid fa-gear text-lg"></i>
          Settings
        </div>

      </div>

    </div>

  );
}

export default DashboardLeftSide;
