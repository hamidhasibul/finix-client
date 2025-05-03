import galleryImage from "@/assets/images/gallery-image.png";
import turfImage from "@/assets/images/turf-image.jpg";
export const galleryImages = [
  { id: 1, name: "gallery-img", href: galleryImage },
  { id: 2, name: "gallery-img", href: galleryImage },
  { id: 3, name: "gallery-img", href: galleryImage },
];

export const EVENT_DETAILS = {
  title: "Road to the Football Finals",
  desription:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsa at dolores, nihil cum corrupti dicta, libero, illo enim consectetur in provident quo! Eligendi, eaque. Voluptate officia aut dolorem cumque esse eligendi iure reiciendis repellat quibusdam vel velit sit nesciunt rem totam voluptates iusto, hic minus! Voluptatem atque voluptate rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nihil itaque minima. Enim, architecto eos amet quae corporis consequuntur accusamus?",
  venue: "Bashundhara Sports Complex",
  date: "Mar 14",
  time: "7:30 PM - 9:30 PM",
  fee: 300,
  currency: "tk",
  totalSpots: 12,
  registeredPlayers: 6,
  sportType: "Football",
  misc: "Relay",
  gender: "Female",
  ageLimit: "Below 25y",
  skillLevel: "Beginner",
};

export const EVENTS = [
  {
    id: 1,
    title: "Legends Rise on the Field",
    venue: "Bashundhara Sports Complex",
    date: "Mar 14",
    time: "7:30 PM - 9:30 PM",
    fee: 320,
    currency: "tk",
    totalSpots: 8,
    registeredPlayers: 6,
    sportType: "Football",
    ageLimit: "Below 25y",
    skillLevel: "Advanced",
    image: turfImage,
  },
  {
    id: 2,
    title: "Chasing Glory: Football Showdown",
    venue: "Bashundhara Sports Complex",
    date: "Mar 14",
    time: "7:30 PM - 9:30 PM",
    fee: 320,
    currency: "tk",
    totalSpots: 8,
    registeredPlayers: 6,
    sportType: "Football",
    ageLimit: "Below 25y",
    skillLevel: "Advanced",
    image: turfImage,
  },
  {
    id: 3,
    title: "United We Play, United Win",
    venue: "Bashundhara Sports Complex",
    date: "Mar 14",
    time: "7:30 PM - 9:30 PM",
    fee: 320,
    currency: "tk",
    totalSpots: 8,
    registeredPlayers: 6,
    sportType: "Football",
    ageLimit: "Below 25y",
    skillLevel: "Advanced",
    image: turfImage,
  },
  {
    id: 4,
    title: "United We Play, United Win",
    venue: "Bashundhara Sports Complex",
    date: "Mar 14",
    time: "7:30 PM - 9:30 PM",
    fee: 320,
    currency: "tk",
    totalSpots: 8,
    registeredPlayers: 6,
    sportType: "Football",
    ageLimit: "Below 25y",
    skillLevel: "Advanced",
    image: turfImage,
  },
];

export const players = [
  { id: 1, name: "Alex Mercer", initials: "AM", isHost: true },
  { id: 2, name: "Jamir Uddin", initials: "JU" },
  { id: 3, name: "Biplu Ahmed", initials: "BA" },
  { id: 4, name: "Topu Barman", initials: "TB" },
  { id: 5, name: "Rakib Hossain", initials: "RH" },
  { id: 6, name: "Shamit Shome", initials: "SS" },
];

export type Comment = {
  id: number;
  user: {
    name: string;
    initials: string;
  };
  text: string;
  time: string;
  replyToId?: number;
};

export const comments: Comment[] = [
  {
    id: 1,
    user: { name: "Alex Mercer", initials: "AM" },
    text: "Looking forward to the game! What's the final player count?",
    time: "14 min",
  },
  {
    id: 2,
    user: { name: "Rifat Khan", initials: "RK" },
    text: "missing few players",
    time: "14 min",
    replyToId: 1,
  },
  {
    id: 3,
    user: { name: "Rifat Khan", initials: "RK" },
    text: "got any friends?",
    time: "14 min",
    replyToId: 1,
  },
  {
    id: 4,
    user: { name: "Alex Mercer", initials: "AM" },
    text: "Looking forward to the game! What's the final player count?",
    time: "14 min",
  },
  {
    id: 5,
    user: { name: "Alex Mercer", initials: "AM" },
    text: "Looking forward to the game! What's the final player count?",
    time: "14 min",
  },
  {
    id: 6,
    user: { name: "Rifat Khan", initials: "RK" },
    text: "got any friends?",
    time: "14 min",
    replyToId: 5,
  },
];
