"use client";

import { FaBell, FaExpand } from "react-icons/fa";
import { useState } from "react";
import { useRouter,usePathname } from "next/navigation";

const Header = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname=usePathname()
  const handelHeaderRoutes=["/","/login"]
  
  if(handelHeaderRoutes.includes(pathname)){
    return null
  }
  
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   router.push("/login");
  // };
  const handleLogout = async () => {
  await fetch("http://localhost:5000/auth/logout", {
    method: "GET",
    credentials: "include",
  });
  localStorage.removeItem("token");
  router.push("/login");
};


  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mb-6">
      <h1 className="text-xl font-semibold">Admin Panel</h1>
      <div className="flex items-center gap-4 relative">
        {/* Fullscreen Icon */}
        <button
          onClick={toggleFullscreen}
          className="text-gray-600 hover:text-blue-500 text-xl transition"
          title="Toggle Fullscreen"
        >
          <FaExpand />
        </button>

        {/* Notifications Icon */}
        <button
          className="relative text-gray-600 hover:text-blue-500 text-xl transition"
          title="Notifications"
        >
          <FaBell />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        {/* Profile Avatar */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300"
            title="Profile"
          >
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
