export interface CertificationItem {
  image: string;
  title: string;
  description: string;
  viewLink: string;
  downloadLink: string;
}

export const certificationData: CertificationItem[] = [
  {
    image: "/assets/Cert/AS9100D.jpg",
    title: "AS9100 Certification",
    description:
      "Certification ensuring our quality management system meets aerospace industry standards.",
    viewLink: "/assets/Cert/AS9100D.jpg",
    downloadLink: "/assets/Cert/AS9100D.pdf",
  },
];
