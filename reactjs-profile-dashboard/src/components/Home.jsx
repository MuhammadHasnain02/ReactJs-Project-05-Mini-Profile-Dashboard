import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

function Home({ profiles , hobbies }) {

    const navigation = useNavigate()
    const { darkMode, setDarkMode } = useContext(ThemeContext)

    return (

        <div className={`ml-60 p-8 min-h-screen transition-all duration-300
            ${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"}`}>

            {/* Top heading */}
            <h1 className={`text-2xl font-bold mb-6 
                ${darkMode ? "text-white" : "text-gray-800"}`}>
                Dashboard Overview
            </h1>

            {/* Grid 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {/* Followers */}
                <div
                onClick={() => navigation('/followers')}
                className={`p-8 rounded-xl shadow-md border cursor-pointer hover:shadow-lg
                ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
                >
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                    <h2 className={`${darkMode ? "text-gray-200" : "text-gray-600"} text-3xl font-bold`}>1,245</h2>
                    <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} text-sm font-medium`}>Followers</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <i className="fa-solid fa-users text-blue-600 text-xl"></i>
                    </div>
                </div>
                </div>

                {/* Following */}
                <div
                onClick={() => navigation('/followers')}
                className={`p-8 rounded-xl shadow-md border cursor-pointer hover:shadow-lg
                ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
                >
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                    <h2 className={`${darkMode ? "text-gray-200" : "text-gray-600"} text-3xl font-bold`}>980</h2>
                    <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} text-sm font-medium`}>Following</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <i className="fa-solid fa-user-group text-purple-600 text-xl"></i>
                    </div>
                </div>
                </div>

                {/* Total Hobbies */}
                <div
                onClick={() => navigation('/hobbies')}
                className={`p-8 rounded-xl shadow-md border cursor-pointer hover:shadow-lg
                ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
                >
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                    <h2 className={`${darkMode ? "text-gray-200" : "text-gray-600"} text-3xl font-bold`}>12</h2>
                    <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} text-sm font-medium`}>Total Hobbies</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                    <i className="fa-regular fa-heart text-pink-600 text-xl"></i>
                    </div>
                </div>
                </div>

            </div>

            {/* Profile Summary & Hobbies Box */}
            <div className="flex flex-row justify-between gap-6 mt-8">

                {/* Profile Summary */}
                <div
                className={`px-8 py-6 rounded-xl shadow-sm cursor-pointer border 
                ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
                >
                <h2 className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
                    Profile Summary
                </h2>

                {profiles.slice(0, 2).map((user) => (
                    <div
                    key={user.id}
                    onClick={() => navigation('/profile')}
                    className={`flex items-center pt-5 mt-4 gap-6 border-t 
                    ${darkMode ? "border-gray-600" : "border-gray-300"}`}
                    >
                    <div className="flex justify-center mb-4">
                        <img
                        src={user.image}
                        alt={user.name}
                        className="w-24 h-24 rounded-full border shadow-sm"
                        />
                    </div>
                    <div>
                        <p className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-semibold text-lg`}>
                        {user.name}
                        </p>
                        <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} text-sm`}>
                        {user.role}
                        </p>
                        <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} mt-2 max-w-[400px]`}>
                        {user.email}
                        </p>
                    </div>
                    </div>
                ))}
                </div>

                {/* Hobbies Box */}
                <div
                className={`px-10 py-6 rounded-xl shadow-sm cursor-pointer border 
                ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
                >
                <h2
                    className={`text-xl font-semibold pb-1.5 mb-5 border-b 
                    ${darkMode ? "text-white border-gray-600" : "text-gray-800 border-gray-300"}`}
                >
                    Your Hobbies
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">

                    {hobbies.slice(0, 3).map((hobby, index) => (
                    <div
                        key={index}
                        onClick={() => navigation('/hobbies')}
                        className={`flex flex-col justify-center w-full p-8 rounded-2xl shadow-lg border hover:shadow-xl
                        ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}
                    >
                        <div className="flex items-center justify-center mb-2">
                        {hobby.icon}
                        <h2 className={`text-lg sm:text-xl font-semibold ml-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
                            {hobby.name}
                        </h2>
                        </div>
                        <p className={`text-center text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                        {hobby.description}
                        </p>
                    </div>
                    ))}

                    {/* Add Hobby */}
                    <div
                    onClick={() => navigation('/hobbies')}
                    className={`flex flex-col justify-center w-full p-8 rounded-2xl shadow-lg border hover:shadow-xl
                    ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}
                    >
                    <div className="flex items-center justify-center mb-2 space-x-2">
                        <i className="fa-solid fa-plus text-2xl text-indigo-500"></i>
                        <h2 className={`text-lg sm:text-xl font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
                        Add Hobby
                        </h2>
                    </div>
                    <p className={`text-center text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                        Add your new hobby here
                    </p>
                    </div>

                </div>
                </div>

            </div>

        </div>


    );

}

export default Home;
