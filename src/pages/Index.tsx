
import React from "react";
import NavBar from "@/components/NavBar";
import Feed from "@/components/Feed";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <NavBar />
      <Feed />
    </div>
  );
};

export default Index;
