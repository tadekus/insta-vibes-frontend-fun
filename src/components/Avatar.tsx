
import React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Avatar = ({ src, alt, size = "md", className }: AvatarProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  return (
    <div 
      className={cn(
        "rounded-full overflow-hidden border border-gray-200", 
        sizeClasses[size], 
        className
      )}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
        onError={(e) => {
          // Replace with default avatar if image fails to load
          e.currentTarget.src = "https://via.placeholder.com/150";
        }} 
      />
    </div>
  );
};

export default Avatar;
