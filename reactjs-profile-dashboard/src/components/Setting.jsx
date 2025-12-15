import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"


function Setting() {
    const { darkMode, setDarkMode } = useContext(ThemeContext)

    return (

        <div className={`ml-60 flex items-center justify-center min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
            <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <i className={`fas fa-cog text-6xl mb-2 ${darkMode ? "text-gray-400" : "text-gray-400"}`}></i>

                {/* Heading */}
                <h1 className="text-3xl font-bold">
                Settings
                </h1>

                {/* Message */}
                <p className={`${darkMode ? "text-gray-300" : "text-gray-500"} text-lg`}>
                No Settings Available at the moment
                </p>
            </div>
        </div>


    )

}

export default Setting