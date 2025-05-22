
import React from "react";
import Avatar from "./Avatar";
import { users } from "@/data/users";

const Stories = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 rounded-xl p-3 mb-5 overflow-x-auto max-w-full mx-auto shadow-sm">
      <h3 className="text-xs font-semibold text-purple-700 mb-2 ml-1">Highlights</h3>
      <div className="flex space-x-3">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col items-center space-y-1 min-w-[60px]">
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
