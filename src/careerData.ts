interface Vacancy {
  Position: string;
  Department: string;
  Location: string;
  Email: string;
  Description: string;
}

interface HRContact {
  name: string;
  role: string;
  email: string;
  image: string;
}

export const hrContacts: HRContact[] = [
  {
    name: "Stacy Gan",
    role: "Head of Human Resource",
    email: "stacy.gan@hsaerosystem.com",
    image: "/assets/Career/stacy.jpg",
  },
  {
    name: "Nurain binti Mohd Rais",
    role: "Human Resource Executive",
    email: "nurain.rais@hsaerosystem.com",
    image: "/assets/Career/nurain.jpg",
  },
];
