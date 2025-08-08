export type employeeInfo = {
  name: string;
  title: string;
  image: string;
  description: string;
};

export const recognizedEmployees: employeeInfo[] = [
  {
    name: "Jane Doe",
    title: "Lead Design Engineer",
    image: "/assets/Team/default.jpg",
    description:
      "For outstanding leadership and delivering innovative design solutions during Q2.",
  },
  {
    name: "John Doe",
    title: "Production Supervisor",
    image: "/assets/Team/default.jpg",
    description:
      "Recognized for achieving 100% on-time delivery and maintaining top-tier quality control.",
  },
  {
    name: "Nur",
    title: "Quality Engineer",
    image: "/assets/Team/default.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lee",
    title: "CNC Machinist",
    image: "/assets/Team/default.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
