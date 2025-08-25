// processCapData.ts

export interface ProcessCapItem {
  id: string;
  title: string;
  bulletPoints: string[];
  image: string;
  alt: string;
}

const processCapData: ProcessCapItem[] = [
  {
    id: "01",
    title: "Precision Sheet Metal",
    bulletPoints: [
      "Fiber Laser Cutting",
      "Robotic Sheet Metal Bending",
      "Manual Sheet Metal Bending",
      "Sheet Metal Punch",
      "Burnishing",
    ],
    image: "./assets/ProcessCap/sheetmetal.JPG",
    alt: "Precision Sheet Metal",
  },
  {
    id: "02",
    title: "CNC Machining",
    bulletPoints: [
      "3 Axis Vertical Machining",
      "4 Axis Horizontal Machining",
      "Tool Presetter",
    ],
    image: "./assets/ProcessCap/cnc.jpg",
    alt: "CNC Machining",
  },
  {
    id: "03",
    title: "Welding",
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
    bulletPoints: [
      "Assembly Installations (Riveting, Fastening, etc)",
      "Inkjet Marking",
      "Fiber Laser Marking",
    ],
    image: "./assets/ProcessCap/assembly-testing6.png",
    alt: "Mechanical Assembly",
  },
  {
    id: "05",
    title: "Quality Inspection",
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
    image: "./assets/ProcessCap/quality-cap1.png",
    alt: "Experimental Capability",
  },
];

export default processCapData;
