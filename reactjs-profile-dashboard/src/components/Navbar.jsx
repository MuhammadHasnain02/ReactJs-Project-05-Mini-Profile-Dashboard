import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Navbar() {

    const { darkMode, setDarkMode } = useContext(ThemeContext)
    
    return (
        <nav className={`px-6 py-4 z-50 shadow-sm border-b flex items-center justify-between transition-all duration-300
            ${darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-black border-gray-200"}`}>

            {/* Left Side */}
            <div className="flex flex-row justify-around space-x-10">

                {/* Hamburger */}
                <button className={`px-2 py-1 rounded-md text-xl cursor-pointer border
                    ${darkMode ? "border-gray-700 text-gray-300 hover:text-white" : "border-gray-200 text-gray-600 hover:text-gray-900"}`}>
                    <i className="fa-solid fa-bars"></i>
                </button>

                {/* Search Box */}
                <div className={`flex items-center rounded-full px-4 py-2.5 w-full border
                    ${darkMode ? "border-gray-700" : "border-gray-300"}`}>

                    <i className={`fa-solid fa-magnifying-glass mr-3 
                        ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                    ></i>
                    <input type="text" placeholder="Search or type command..."
                        className={`placeholder:tracking-tight font-medium bg-transparent outline-none text-sm w-100
                        ${darkMode ? "text-white placeholder-gray-400" : "text-black placeholder-gray-500"}`}
                    />

                </div>

            </div>

            {/* Right Side */}
            <div className="flex items-center gap-5">

                {/* Dark Mode Toggle */}
                <button onClick={() => setDarkMode(!darkMode)}
                    className={`cursor-pointer ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} text-xl`}>
                    <i className={`fa-regular fa-${darkMode ? "sun" : "moon"}`}></i>
                </button>

                {/* Notification Icon */}
                <button className={`relative text-xl cursor-pointer
                    ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}>
                    <i className="fa-regular fa-bell"></i>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Profile */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <i className={`fa-regular fa-circle-user ${darkMode ? "text-gray-300" : "text-gray-700"}`}></i>
                    <p className={`${darkMode ? "text-gray-200" : "text-gray-800"} font-medium`}>
                        User
                    </p>
                </div>

            </div>
        </nav>

    )

}


export default Navbar