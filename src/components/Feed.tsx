
import React, { useState } from "react";
import PostCard from "./PostCard";
import Stories from "./Stories";
import { Post, posts as initialPosts } from "@/data/posts";

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  return (
    <div className="pb-20 md:pb-0 md:pt-24">
      <div className="container max-w-screen-lg mx-auto px-4">
        <Stories />
        <div className="space-y-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
