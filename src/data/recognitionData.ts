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
    title: "Welding Engineer",
    image: "/assets/Team/default.jpg",
    quarter: "Q1",
    description:
      "For exceptional skill and precision in welding projects, contributing to high-quality results in Q1.",
  },
  {
    name: "John Doe",
    title: "Logistics and Warehouse Manager",
    image: "/assets/Team/default.jpg",
    quarter: "Q2",
    description:
      "Recognized for optimizing warehouse operations and ensuring seamless, on-time deliveries in Q2.",
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
