import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

// Individual Followers Card
function FollowersCardItem({ user , onUnfollow }) {
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  return (

    <div className={`flex flex-col justify-center w-full shadow-lg border rounded-2xl p-6 transition-all duration-300
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
      <h2
        className={`text-xl font-bold text-center
          ${darkMode ? "text-white" : "text-gray-800"}
        `}
      >
        {user.name}
      </h2>

      <p
        className={`text-center mb-2
          ${darkMode ? "text-gray-300" : "text-gray-500"}
        `}
      >
        {user.role}
      </p>

      {/* Email */}
      <p
        className={`text-center text-sm mb-4
          ${darkMode ? "text-gray-400" : "text-gray-600"}
        `}
      >
        {user.email}
      </p>

      {/* Followers Count */}
      <div className="text-center mb-4">
        <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          Followers
        </p>
        <h3 className="text-2xl font-bold text-indigo-600">{user.followers}</h3>
      </div>

      {/* Unfollow Button */}
      <button onClick={() => onUnfollow(user.id)}
        className="w-full py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg cursor-pointer transition duration-300 hover:scale-[0.98]"
      >
        Unfollow
      </button>

    </div>

  );
}

// Followers Section
export default function FollowersCard({ profiles }) {
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const [users, setUsers] = useState(profiles);

  // Remove user on Unfollow
  const handleUnfollow = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };
  
  return (
    
    <div className={`ml-60 p-10 min-h-screen
    ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-2">Followers</h1>

      {/* One-line sentence */}
      <p className={`${darkMode ? "text-gray-300" : "text-gray-500"} mb-6`}>
        See all the users you have followed and keep track of their updates.
      </p>

      {/* Followers Grid */}
      {users.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {users.map(user => (
            <FollowersCardItem
              key={user.id}
              user={user}
              onUnfollow={handleUnfollow}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-20 text-md">
          No followed users to display.
        </p>
      )}

    </div>


  );
}
