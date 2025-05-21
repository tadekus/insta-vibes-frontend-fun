
import { User, users } from "./users";

export interface Comment {
  id: string;
  user: User;
  text: string;
  timestamp: string;
}

export interface Post {
  id: string;
  user: User;
  imageUrl: string;
  caption: string;
  likes: number;
  isLiked: boolean;
  timestamp: string;
  comments: Comment[];
}

export const posts: Post[] = [
  {
    id: "1",
    user: users[0], // Jane Doe
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=600&fit=crop",
    caption: "Beautiful sunset at the mountains! 🏔️ #nature #adventure",
    likes: 256,
    isLiked: false,
    timestamp: "2 hours ago",
    comments: [
      {
        id: "c1",
        user: users[2], // Alex Morgan
        text: "This view is amazing! Where was this taken?",
        timestamp: "1 hour ago"
      },
      {
        id: "c2",
        user: users[3], // Michael Chen
        text: "Stunning colors! 😍",
        timestamp: "45 minutes ago"
      }
    ]
  },
  {
    id: "2",
    user: users[2], // Alex Morgan
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=600&fit=crop",
    caption: "Working on some new coding projects! #developer #coding",
    likes: 124,
    isLiked: true,
    timestamp: "5 hours ago",
    comments: [
      {
        id: "c3",
        user: users[1], // John Smith
        text: "What programming language are you using?",
        timestamp: "3 hours ago"
      }
    ]
  },
  {
    id: "3",
    user: users[4], // Samantha Williams
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=600&fit=crop",
    caption: "Golden hour in the forest 🌲✨ #photography #nature",
    likes: 432,
    isLiked: false,
    timestamp: "1 day ago",
    comments: [
      {
        id: "c4",
        user: users[0], // Jane Doe
        text: "I love this shot! What camera did you use?",
        timestamp: "20 hours ago"
      },
      {
        id: "c5",
        user: users[2], // Alex Morgan
        text: "The lighting is perfect!",
        timestamp: "18 hours ago"
      },
      {
        id: "c6",
        user: users[3], // Michael Chen
        text: "This makes me want to go hiking!",
        timestamp: "12 hours ago"
      }
    ]
  },
  {
    id: "4",
    user: users[1], // John Smith
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop",
    caption: "Working from home today. Coffee and code. ☕💻",
    likes: 187,
    isLiked: false,
    timestamp: "3 days ago",
    comments: [
      {
        id: "c7",
        user: users[3], // Michael Chen
        text: "Nice setup! What laptop are you using?",
        timestamp: "2 days ago"
      }
    ]
  },
  {
    id: "5",
    user: users[3], // Michael Chen
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=600&fit=crop",
    caption: "My cat Oliver just chilling 🐱 #catsofinstagram",
    likes: 312,
    isLiked: true,
    timestamp: "4 days ago",
    comments: [
      {
        id: "c8",
        user: users[4], // Samantha Williams
        text: "Soooo cute! 😻",
        timestamp: "3 days ago"
      },
      {
        id: "c9",
        user: users[0], // Jane Doe
        text: "I want to pet him!",
        timestamp: "2 days ago"
      }
    ]
  }
];
