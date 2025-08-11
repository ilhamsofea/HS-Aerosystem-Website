export type employeeInfo = {
  name: string;
  title: string;
  image: string;
  quarter: string;
  description: string;
};

export const recognizedEmployees: employeeInfo[] = [
  {
    name: "Jane Doe",
    title: "Lead Design Engineer",
    image: "/assets/Team/default.jpg",
    quarter: "Q1",
    description:
      "For outstanding leadership and delivering innovative design solutions during Q1.",
  },
  {
    name: "John Doe",
    title: "Production Supervisor",
    image: "/assets/Team/default.jpg",
    quarter: "Q2",
    description:
      "Recognized for achieving 100% on-time delivery and maintaining top-tier quality control.",
  },
  {
    name: "Nur",
    title: "Quality Engineer",
    image: "/assets/Team/default.jpg",
    quarter: "Q3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lee",
    title: "CNC Machinist",
    image: "/assets/Team/default.jpg",
    quarter: "Q4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
