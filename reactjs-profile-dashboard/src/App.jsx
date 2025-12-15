import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import DashboardLeftSide from "./components/DashboardLeftSide";
import ProfileCard from "./components/ProfileCard";
import HobbyList from "./components/HobbyList";
import Setting from "./components/Setting";
import FollowersCard from "./components/Followers";
import Navbar from "./components/Navbar";

function App() {

  // Profiles (Array of Objects)
  const profiles = [

    {
      id: 1,
      name: "John Doe",
      role: "Frontend Developer",
      email: "john@example.com",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Emily Carter",
      role: "UI/UX Designer",
      email: "emily@example.com",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Michael Smith",
      role: "Full-Stack Developer",
      email: "michael@example.com",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      name: "Sophia Lane",
      role: "React Developer",
      email: "sophia@example.com",
      image: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      name: "Daniel Gray",
      role: "Backend Engineer",
      email: "daniel@example.com",
      image: "https://i.pravatar.cc/150?img=7",
    },
    {
      id: 6,
      name: "Olivia Wilson",
      role: "Product Designer",
      email: "olivia@example.com",
      image: "https://i.pravatar.cc/150?img=8",
    }

  ];

  // Hobbies
  const hobbies = [

    { 
      name: "Coding", 
      icon: <i className="fas fa-code text-green-500 text-2xl mr-2"></i>,
      description: "I love building amazing web apps." 
    },
    { 
      name: "Cricket", 
      icon: <i className="fas fa-baseball-bat-ball text-yellow-500 text-2xl mr-2"></i>,
      description: "Playing cricket keeps me active." 
    },
    { 
      name: "Gaming", 
      icon: <i className="fas fa-gamepad text-purple-500 text-2xl mr-2"></i>,
      description: "Gaming is my way to relax." 
    },
    { 
      name: "Traveling", 
      icon: <i className="fas fa-plane text-blue-500 text-2xl mr-2"></i>,
      description: "Exploring new places excites me." 
    },
    { 
      name: "Reading", 
      icon: <i className="fas fa-book-open text-indigo-500 text-2xl mr-2"></i>,
      description: "Reading improves knowledge." 
    },
    { 
      name: "Photography", 
      icon: <i className="fas fa-camera text-red-500 text-2xl mr-2"></i>,
      description: "Capturing moments creatively." 
    },

  ];

  return (
    <div className="flex flex-col min-h-screen justify-between">

      {/* Navbar */}
      <div className="ml-60">
        <Navbar />
      </div>

      {/* Dashboard Left Side */}
      <DashboardLeftSide />

      {/* Sections */}
      <Routes>

        <Route index element={<Home profiles={profiles} hobbies={hobbies} />} />
        <Route path="/profile" element={<ProfileCard profiles={profiles} />} />
        <Route path="/followers" element={<FollowersCard profiles={profiles} />} />
        <Route path="/hobbies" element={<HobbyList hobbies={hobbies} />} />
        <Route path="/setting" element={<Setting />} />

      </Routes>

      {/* Footer */}
      <Footer />

    </div>
  );
  
}

export default App