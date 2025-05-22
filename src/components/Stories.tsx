
import React from "react";
import Avatar from "./Avatar";
import { users } from "@/data/users";

const Stories = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 rounded-xl p-4 mb-6 overflow-x-auto max-w-lg mx-auto shadow-sm">
      <h3 className="text-sm font-semibold text-purple-700 mb-3 ml-1">Highlights</h3>
      <div className="flex space-x-4">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col items-center space-y-1 min-w-[70px]">
            <div className="p-0.5 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500">
              <Avatar 
                src={user.profileImage} 
                alt={user.username} 
                size="lg"
                className="border-2 border-white"
              />
            </div>
            <span className="text-xs truncate w-full text-center font-medium text-purple-800">{user.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
