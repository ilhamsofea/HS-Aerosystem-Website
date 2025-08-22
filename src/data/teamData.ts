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
  img: "/assets/Team/dryeow.jpg",
  bio: "[text]",
  email: "yeow.jeeleong@hsaerosystem.com",
};

export const teamMembers: TeamMember[] = [
  {
    name: "Jonas See",
    title: "Finance Controller",
    img: "/assets/Team/jonas.jpg",
    bio: "[text]",
    email: "jonassee@hsaerosystem.com",
  },
  {
    name: "Annie Chia",
    title: "Head of Engineering",
    img: "/assets/Team/annie.jpg",
    bio: "[text]",
    email: "annie.chia@hsaerosystem.com",
  },
  {
    name: "Stacy Gan",
    title: "Head of HR",
    img: "/assets/Team/stacy.jpg",
    bio: "[text]",
    email: "stacy.gan@hsaerosystem.com",
  },
  {
    name: "Leslie Joseph",
    title: "Head of Manufacturing",
    img: "/assets/Team/leslie.jpg",
    bio: "[text]",
    email: "leslie@hsaerosystem.com",
  },
  {
    name: "Zulfadhli Idrus",
    title: "Head of Operations",
    img: "/assets/Team/zulfadhli2.jpg",
    bio: "[text]",
    email: "zulfadhli.idrus@hsaerosystem.com",
  },
  {
    name: "Grace Lee",
    title: "Head of Quality",
    img: "/assets/Team/grace.jpg",
    bio: "[text]",
    email: "grace.lee@hsaerosystem.com",
  },
];
