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
  phone: string;
  image: string;
}

export const hrContacts: HRContact[] = [
  {
    name: "Jane Doe",
    role: "HR Manager",
    email: "jane@company.com",
    phone: "+60 12-345 6789",
    image:
      "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg",
  },
  {
    name: "John Doe",
    role: "Recruitment Officer",
    email: "john@company.com",
    phone: "+60 10-123 4567",
    image:
      "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg",
  },
  {
    name: "Nur",
    role: "Recruitment Officer",
    email: "nur@company.com",
    phone: "+60 19-012 3456",
    image:
      "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg",
  },
];
