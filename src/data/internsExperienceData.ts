// src/data/internExperienceData.ts

export interface InternExperience {
  name: string;
  role: string;
  dept: string;
  experience: string;
  image?: string; // new field
}

export const internsExperience: InternExperience[] = [
  {
    name: "Dinish A/L Somanaidu",
    role: "Engineering Intern",
    dept: "Engineering",
    experience:
      "As an intern in the engineering department at HS Aerosystem Sdn Bhd, I am involved in various technical tasks, including design analysis, process improvements, and documentation, while also assisting in troubleshooting and optimizing engineering workflows to enhance manufacturing efficiency.",
    image: "/assets/InternsExperience/dinish.jpg",
  },
  {
    name: "Nursyaqilla Jasmin binti Jefferidin",
    role: "Finance Intern",
    dept: "Finance",
    experience:
      "I learn something new everyday in the department. Working in Finance is harder than expected but I am looking forward to improve myself throughout every process.",
    image: "/assets/InternsExperience/syaqilla.jpg",
  },
  {
    name: "Muhammad Ainul Arif bin MHD Nazli ",
    role: "Manufacturing Intern",
    dept: "Manufacturing",
    experience:
      "I have been involved in tracking and collect the data for cycle time in each running machine to update the OEE that improve my understanding about the effeciency in production. Furthermore, I also assist the production executive to count the stock and update the purchase requisition. Besides, I propose some template about the production to production executive.",
    image: "/assets/InternsExperience/ainul.jpg",
  },
  {
    name: "Ilyin Ariana binti Mohd Hami",
    role: "Warehouse Intern",
    dept: "Operations",
    experience:
      "I’m having a great experience at HSA with a supportive work environment. I’m learning a lot about logistics operations in a manufacturing company from my colleagues, and my supervisor is very helpful in guiding me through my assignments. This hands-on experience is giving me valuable insights into the field.",
    image: "/assets/InternsExperience/ariana.jpg",
  },
];
