
import React, { useState } from "react";
import { Post } from "@/data/posts";
import UserHeader from "./UserHeader";
import Avatar from "./Avatar";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";
import CommentSection from "./CommentSection";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const [liked, setLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [comment, setComment] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      // In a real app, this would add the comment to the database
      console.log(`New comment: ${comment}`);
      setComment("");
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-md mb-6 max-w-lg mx-auto">
      <UserHeader user={post.user} timestamp={post.timestamp} />
      
      {/* Post Image */}
      <div className="relative">
        <img 
          src={post.imageUrl} 
          alt="Post" 
          className="w-full object-cover" 
          style={{ maxHeight: "calc(100vh - 300px)" }}
        />
      </div>
      
      {/* Post Actions */}
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleLike} 
              className="focus:outline-none"
            >
              <Heart 
                className={cn(
                  "w-7 h-7 transition-all", 
                  liked ? "fill-instagram-red text-instagram-red animate-heart-beat" : "text-gray-700"
                )} 
              />
            </button>
            <button className="focus:outline-none">
              <MessageCircle className="w-7 h-7 text-gray-700" />
            </button>
            <button className="focus:outline-none">
              <Send className="w-7 h-7 text-gray-700" />
            </button>
          </div>
          <button className="focus:outline-none">
            <Bookmark className="w-7 h-7 text-gray-700" />
          </button>
        </div>
        
        {/* Likes */}
        <p className="font-semibold text-sm mb-2">{likesCount} likes</p>
        
        {/* Caption */}
        <p className="text-sm mb-1">
          <span className="font-semibold">{post.user.username}</span>{" "}
          {post.caption}
        </p>
        
        {/* Comments */}
        <CommentSection 
          post={post} 
          showAllComments={showAllComments}
          setShowAllComments={setShowAllComments}
        />
        
        {/* Add Comment */}
        <form onSubmit={handleComment} className="flex items-center mt-3 pb-4">
          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 outline-none text-sm"
          />
          {comment.trim() && (
            <button
              type="submit"
              className="text-instagram-blue font-semibold text-sm ml-2"
            >
              Post
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default PostCard;
