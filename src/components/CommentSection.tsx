
import React from "react";
import { Post } from "@/data/posts";
import Avatar from "./Avatar";

interface CommentSectionProps {
  post: Post;
  showAllComments: boolean;
  setShowAllComments: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentSection = ({ post, showAllComments, setShowAllComments }: CommentSectionProps) => {
  const comments = post.comments;
  const commentCount = comments.length;
  const displayComments = showAllComments ? comments : comments.slice(0, 2);

  return (
    <div className="mt-1">
      {commentCount > 2 && !showAllComments && (
        <button 
          onClick={() => setShowAllComments(true)}
          className="text-gray-500 text-sm mb-2 block"
        >
          View all {commentCount} comments
        </button>
      )}
      
      {displayComments.map((comment) => (
        <div key={comment.id} className="flex items-start mb-2">
          <Avatar 
            src={comment.user.profileImage} 
            alt={comment.user.username} 
            size="sm" 
            className="mr-2"
          />
          <div className="flex-1">
            <p className="text-sm">
              <span className="font-semibold">{comment.user.username}</span>{" "}
              {comment.text}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">{comment.timestamp}</p>
          </div>
          <button className="text-gray-400 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M6.6 8.6a1 1 0 011.4 0l2 2 2-2a1 1 0 111.4 1.4l-2.7 2.7a1 1 0 01-1.4 0L7 10a1 1 0 010-1.4z" />
            </svg>
          </button>
        </div>
      ))}
      
      {showAllComments && commentCount > 2 && (
        <button 
          onClick={() => setShowAllComments(false)}
          className="text-gray-500 text-sm mt-1 block"
        >
          Show less
        </button>
      )}
    </div>
  );
};

export default CommentSection;
