
import React, { useState } from "react";
import PostCard from "./PostCard";
import Stories from "./Stories";
import { Post, posts as initialPosts } from "@/data/posts";

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  return (
    <div className="pt-2 pb-20 md:pb-0 md:pt-20">
      <div className="container max-w-screen-lg mx-auto px-2 md:px-4">
        <Stories />
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
