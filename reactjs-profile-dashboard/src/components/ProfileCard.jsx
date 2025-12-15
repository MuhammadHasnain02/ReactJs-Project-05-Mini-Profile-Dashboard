import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

function ProfileCardItem({ user }) {

  const [followers, setFollowers] = useState(Math.floor(Math.random() * 100));
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const [isFollowed, setIsFollowed] = useState(false);

  return (

    <div className={`w-full shadow-md border rounded-xl p-6 transition-all duration-300
      ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>

      {/* Image */}
      <div className="flex justify-center mb-4">
        <img
          src={user.image}
          alt={user.name}
          className="w-24 h-24 rounded-full border shadow-sm"
        />
      </div>

      {/* Name & Role */}
      <h2 className={`text-xl font-bold text-center 
        ${darkMode ? "text-white" : "text-gray-800"}`}>
        {user.name}
      </h2>

      <p className={`${darkMode ? "text-gray-300" : "text-gray-500"} text-center`}>
        {user.role}
      </p>

      {/* Email */}
      <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-center text-sm mb-4`}>
        {user.email}
      </p>

      {/* Followers */}
      <div className="text-center mb-4">
        <p className={`${darkMode ? "text-gray-200" : "text-gray-600"} font-semibold`}>
          Followers : <span className="text-xl font-bold text-indigo-600">{followers}</span>
        </p>
      </div>

      {/* Follow Button (same in both themes) */}
      <button disabled={isFollowed}
        onClick={() => {
          if (!isFollowed) {
            setFollowers(followers + 1);
            setIsFollowed(true);
          }
        }}
        className={`w-full py-2 text-white font-semibold rounded-lg transition duration-300
          ${isFollowed ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:scale-[0.98]"}`}
      >
        {isFollowed ? "Following" : "Follow"}
      </button>

    </div>


  );

}

function ProfileCard({ profiles }) {
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  return (

    <div className={`ml-60 mb-20 p-10 transition-all duration-300
      ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}
    `}>

      {/* Heading */}
      <h1 className={`text-3xl font-bold mb-2 
        ${darkMode ? "text-white" : "text-gray-800"}`}>
        Profiles
      </h1>

      <p className={`${darkMode ? "text-gray-300" : "text-gray-500"} mb-6`}>
        Here are some profiles including yours and others with their details and followers count.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {profiles.map((user) => (
          <ProfileCardItem key={user.id} user={user} />
        ))}
      </div>

    </div>


  );
}

export default ProfileCard;