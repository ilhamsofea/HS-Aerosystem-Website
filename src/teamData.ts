// TeamMembers.ts

export interface TeamMember {
  name: string;
  title: string;
  img: string;
  bio?: string;
  email?: string;
}

export const topLeader: TeamMember = {
  name: "Dr. Yeow Jee Leong",
  title: "General Manager",
  img: "/assets/Team/default.jpg",
  bio: "[text]",
  email: "[email]",
};

export const teamMembers: TeamMember[] = [
  {
    name: "Jonas See",
    title: "Finance Controller",
    img: "/assets/Team/default.jpg",
    bio: "[text]",
    email: "[email]",
  },
  {
    name: "Annie Chia",
    title: "Head of Engineering",
    img: "/assets/Team/default.jpg",
    bio: "[text]",
    email: "[email]",
  },
  {
    name: "Stacy Gan",
    title: "Head of HR",
    img: "/assets/Team/default.jpg",
    bio: "[text]",
    email: "[email]",
  },
  {
    name: "Leslie Joseph",
    title: "Head of Manufacturing",
    img: "/assets/Team/default.jpg",
    bio: "[text]",
    email: "[email]",
  },
  {
    name: "Zulfadhli Idrus",
    title: "Head of Operations",
    img: "/assets/Team/default.jpg",
    bio: "[text]",
    email: "[email]",
  },
  {
    name: "Grace Lee",
    title: "Head of Quality",
    img: "/assets/Team/default.jpg",
    bio: "[text]",
    email: "[email]",
  },
];
