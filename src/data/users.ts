export interface User {
  id: string;
  username: string;
  fullName: string;
  profileImage: string;
  isVerified: boolean;
}

export const users: User[] = [
  {
    id: "1",
    username: "pavel_svaton",
    fullName: "Pavel Svaton",
    profileImage: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=400&fit=crop",
    isVerified: true
  },
  {
    id: "2",
    username: "john_smith",
    fullName: "John Smith",
    profileImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
    isVerified: false
  },
  {
    id: "3",
    username: "travel_enthusiast",
    fullName: "Alex Morgan",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    isVerified: true
  },
  {
    id: "4",
    username: "food_lover",
    fullName: "Michael Chen",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    isVerified: false
  },
  {
    id: "5",
    username: "photography_pro",
    fullName: "Samantha Williams",
    profileImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
    isVerified: true
  }
];
