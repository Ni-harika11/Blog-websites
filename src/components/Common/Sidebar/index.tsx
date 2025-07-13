"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ usePathname for client-side path
import { FaHome, FaRegUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineAddPhotoAlternate, MdOutlinePending, MdEmojiEvents } from "react-icons/md";
import { BsPostcardHeart } from "react-icons/bs";

const Sidebar = () => {
  const pathname = usePathname(); // ✅ Correct for Next.js 13+ App Router
  const hideSidebarRoutes=["/","/login"]

  if(hideSidebarRoutes.includes(pathname)){
    return null
  }
  const menu = [
    { label: "Dashboard", href: "/dashboard", icon: <FaHome /> },
    // {label:"Admin Dasboard",href:"/blogspage",icon: <FaHome />},  
    // { label: "User Hub", href: "/admin/user-hub", icon: <FaRegUser /> },
    // { label: "Post Hub", href: "/admin/post-hub", icon: <BsPostcardHeart /> },
    // { label: "Event Hub", href: "/admin/event-hub", icon: <MdEmojiEvents /> },
    { label: "Blogs", href: "/blogs", icon: <MdOutlineAddPhotoAlternate /> },
    { label: "AddBlog", href: "add-blog", icon: <MdOutlineAddPhotoAlternate /> },
    { label: "Pending", href: "/pending", icon: <MdOutlinePending /> },
    { label: "Setting", href: "/setting", icon: <IoMdSettings /> },
    
  ];

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white fixed">
      <div className="flex items-center gap-2 text-2xl font-bold p-5 border-b border-gray-700">
        <FaHome className="text-blue-400" />
        <span>Master Admin</span>
      </div>
      <ul className="mt-4">
        {menu.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-all duration-200 ${
                pathname === item.href ? "bg-gray-700" : ""
              }`}
            >
              <span className="text-xl text-blue-400">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
