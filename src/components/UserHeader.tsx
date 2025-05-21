
import React from "react";
import Avatar from "./Avatar";
import { User } from "@/data/users";
import { Check } from "lucide-react";

interface UserHeaderProps {
  user: User;
  timestamp?: string;
}

const UserHeader = ({ user, timestamp }: UserHeaderProps) => {
  return (
    <div className="flex items-center p-3">
      <Avatar src={user.profileImage} alt={user.username} />
      <div className="ml-3">
        <div className="flex items-center">
          <p className="font-semibold text-sm">{user.username}</p>
          {user.isVerified && (
            <Check className="w-4 h-4 text-instagram-blue ml-1" />
          )}
        </div>
        {timestamp && <p className="text-gray-500 text-xs">{timestamp}</p>}
      </div>
      <button className="ml-auto text-gray-700 hover:text-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </button>
    </div>
  );
};

export default UserHeader;
