import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function HobbyList({ hobbies }) {

    const { darkMode, setDarkMode } = useContext(ThemeContext)
    
    return (

        <div className={`ml-60 p-10 min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
            <h1 className="text-3xl font-bold mb-2">My Hobbies</h1>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-500"} mb-6`}>
                Here are some of my favorite hobbies I enjoy doing regularly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {hobbies.map((hobby, index) => (
                <div
                    key={index}
                    className={`flex flex-col justify-center w-full shadow-lg border rounded-2xl p-8 cursor-pointer transform transition-transform hover:-translate-y-1 hover:shadow-xl
                    ${darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200 text-gray-800"}`}
                >
                    <div className="flex items-center justify-center mb-2">
                    {hobby.icon}
                    <h2 className="text-lg sm:text-xl font-semibold ml-2">{hobby.name}</h2>
                    </div>
                    <p className={`${darkMode ? "text-gray-300" : "text-gray-500"} text-center text-sm`}>
                    {hobby.description}
                    </p>
                </div>
                ))}

                <div
                className={`flex flex-col justify-center w-full shadow-lg border rounded-2xl p-8 cursor-pointer transform transition-transform hover:-translate-y-1 hover:shadow-xl
                    ${darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200 text-gray-800"}`}
                >
                <div className="flex items-center justify-center mb-2 space-x-2">
                    <i className="fa-solid fa-plus text-2xl text-indigo-500"></i>
                    <h2 className="text-lg sm:text-xl font-semibold">Add Hobby</h2>
                </div>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-500"} text-center text-sm`}>
                    Add your new hobby here
                </p>
                </div>
            </div>
        </div>

    );

}


export default HobbyList;