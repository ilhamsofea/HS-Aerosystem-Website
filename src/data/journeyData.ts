// journeyData.ts

export interface Milestone {
  date: string;
  title: string;
  description: string;
  img?: string;
  position: "left" | "right";
  status: "completed" | "planned" | "current";
  showCurrentLabel?: boolean;
}

const journeyData: Milestone[] = [
  {
    date: "14 Feb 2024",
    title: "Company Incorporation",
    description:
      "HS Aerosystem Sdn. Bhd. was officially incorporated, marking the beginning of our journey.",
    position: "left",
    status: "completed",
  },
  {
    date: "March 2024",
    title: "Factory Acquired",
    description:
      "Secured first-phase manufacturing facility to support our aerospace operations.",
    img: "/assets/Journey/company.jpg",
    position: "right",
    status: "completed",
  },
  {
    date: "April 2024",
    title: "First Employee Hired",
    description: "Welcomed the first team member to HS Aerosystem.",
    position: "left",
    status: "completed",
  },
  {
    date: "May 2024",
    title: "Manufacturing License Obtained",
    description: "Granted permission to begin aerospace production activities.",
    position: "right",
    status: "completed",
  },
  {
    date: "End of July 2024",
    title: "Factory Occupation Begins",
    description:
      "Moved into and began setting up the newly acquired factory space.",
    position: "left",
    status: "completed",
  },
  {
    date: "End of August 2024",
    title: "Factory Renovation Completed",
    description:
      "Renovations completed; facility is now fit for aerospace manufacturing.",
    img: "/assets/News/facility2.jpg",
    position: "right",
    status: "completed",
  },
  {
    date: "4 Sept 2024",
    title: "AS9100 Stage 1 Audit",
    description:
      "Initial audit completed for aerospace quality management certification.",
    position: "left",
    status: "completed",
  },
  {
    date: "11-12 November 2024",
    title: "AS9100 Stage 2 Audit",
    description:
      "Final audit to verify full compliance with aerospace standards.",
    position: "right",
    status: "completed",
  },
  {
    date: "End of 2024",
    title: "AS9100 Certification Achieved",
    description: "Officially recognized as compliant with AS9100 standards.",
    img: "/assets/Journey/AS9100D.jpg",
    position: "left",
    status: "completed",
  },
  {
    date: "End of 2024",
    title: "Pre-Production Begins (Phase One)",
    description: "Initial trial production activities launched.",
    position: "right",
    status: "completed",
  },
  {
    date: "March 2025",
    title: "First Article Inspection (FAI)",
    description:
      "Phase 1 production units undergo initial quality inspections.",
    position: "left",
    status: "completed",
    // status: "current",
    // showCurrentLabel: true,
  },
  {
    date: "19-21 August 2025",
    title: "NADCAP Audit Scheduled",
    description:
      "Advanced accreditation process for aerospace special processes.",
    position: "right",
    status: "planned",
  },
  {
    date: "Sometime in 2025",
    title: "100th Employee Milestone (Phase One)",
    description: "Team scales up to over 100 employees.",
    position: "left",
    status: "planned",
  },
  {
    date: "2025",
    title: "Phase Two Site Planning Begins",
    description: "Planning for second phase expansion on a 7-acre site.",
    position: "right",
    status: "planned",
  },
  {
    date: "2026",
    title: "> 120 Employees Reached (Phase One Complete)",
    description:
      "The workforce surpasses 120 as full operational strength is achieved.",
    position: "left",
    status: "planned",
  },
];

export default journeyData;
