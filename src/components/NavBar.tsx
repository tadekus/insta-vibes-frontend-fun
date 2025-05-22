
import React from "react";
import { Home, Search, PlusSquare, Heart, User } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto bg-gradient-to-r from-purple-600 to-blue-500 text-white border-t md:border-b md:border-t-0 border-purple-700 z-10">
      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo for Desktop */}
          <div className="hidden md:block">
            <h1 className="text-xl font-bold">PixelShare</h1>
          </div>
          
          {/* Navigation Icons */}
          <div className="flex items-center justify-around w-full md:justify-end md:w-auto md:space-x-6">
            <Link to="/" className="flex flex-col items-center text-white hover:text-purple-200">
              <Home className="h-6 w-6" />
              <span className="text-xs md:hidden mt-1">Home</span>
            </Link>
            <button className="flex flex-col items-center text-white hover:text-purple-200">
              <Search className="h-6 w-6" />
              <span className="text-xs md:hidden mt-1">Explore</span>
            </button>
            <button className="flex flex-col items-center text-white hover:text-purple-200">
              <PlusSquare className="h-6 w-6" />
              <span className="text-xs md:hidden mt-1">New</span>
            </button>
            <button className="flex flex-col items-center text-white hover:text-purple-200">
              <Heart className="h-6 w-6" />
              <span className="text-xs md:hidden mt-1">Activity</span>
            </button>
            <button className="flex flex-col items-center text-white hover:text-purple-200">
              <User className="h-6 w-6" />
              <span className="text-xs md:hidden mt-1">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
