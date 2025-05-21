
import React from "react";
import Avatar from "./Avatar";
import { users } from "@/data/users";

const Stories = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-4 mb-6 overflow-x-auto max-w-lg mx-auto">
      <div className="flex space-x-4">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col items-center space-y-1 min-w-[70px]">
            <div className="p-0.5 rounded-full bg-gradient-to-tr from-instagram-yellow to-instagram-purple">
              <Avatar 
                src={user.profileImage} 
                alt={user.username} 
                size="lg"
                className="border-2 border-white"
              />
            </div>
            <span className="text-xs truncate w-full text-center">{user.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
