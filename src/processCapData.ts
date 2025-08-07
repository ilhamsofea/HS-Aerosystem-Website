// processCapData.ts

export interface ProcessCapItem {
  id: string;
  title: string;
  description: string;
  bulletPoints: string[];
  image: string;
  alt: string;
}

const processCapData: ProcessCapItem[] = [
  {
    id: "01",
    title: "Precision Sheet Metal",
    description: "[Desc of the process here]",
    bulletPoints: [
      "Fiber Laser Cutting",
      "Robotic Sheet Metal Bending",
      "Manual Sheet Metal Bending",
      "Sheet Metal Punch",
      "Burnishing",
    ],
    image: "./assets/ProcessCap/sheetmetal2-1.JPG",
    alt: "Precision Sheet Metal",
  },
  {
    id: "02",
    title: "CNC Machining",
    description: "[Desc of the process here]",
    bulletPoints: [
      "3 Axis Vertical Machining",
      "4 Axis Horizontal Machining",
      "Tool Presetter",
    ],
    image: "./assets/ProcessCap/cnc2.JPG",
    alt: "CNC Machining",
  },
  {
    id: "03",
    title: "Welding",
    description: "[Desc of the process here]",
    bulletPoints: [
      "Fusion Welding",
      "Spot Welding",
      "Welding Cleaning",
      "High Energy Ultra Sonic Deburring",
    ],
    image: "./assets/ProcessCap/welding.jpg",
    alt: "Welding",
  },
  {
    id: "04",
    title: "Mechanical Assembly",
    description: "[Desc of process here]",
    bulletPoints: [
      "Assembly Installations (Riveting, Fastening, etc)",
      "Inkjet Marking",
      "Fiber Laser Marking",
    ],
    image: "./assets/ProcessCap/assembly-testing5.JPG",
    alt: "Mechanical Assembly",
  },
  {
    id: "05",
    title: "Quality Inspection",
    description: "[Desc of process here]",
    bulletPoints: [
      "3 Dimensional CMM",
      "2.5D OMM",
      "Height Gauge",
      "Tensile Testing",
      "Contourgraph - Profiler",
      "Hardness Tester",
      "Roughness Tester",
      "Vision Detector",
    ],
    image: "./assets/ProcessCap/quality-cap.JPG",
    alt: "Experimental Capability",
  },
];

export default processCapData;
