// activityData.ts

export type ActivityInfo = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const activityList: ActivityInfo[] = [
  {
    title: "Christmas/New Year Celebration",
    description:
      "An exciting weekend filled with games, collaboration, and personal growth. Strengthening bonds beyond the workplace.",
    image: "/assets/Activity/newyear.jpg",
    alt: "Christmas/New Year Celebration",
  },
  {
    title: "Hari Raya Celebration",
    description:
      "A festive gathering with food, culture, and joyful moments to honor diversity in our team.",
    image: "/assets/Activity/raya.png",
    alt: "Hari Raya Celebration",
  },
    {
    title: "Chinese New Year Celebration",
    description:
      "A festive gathering with food, culture, and joyful moments to honor diversity in our team.",
    image: "/assets/Activity/cny.jpg",
    alt: "Chinese New Year Celebration",
  },
  {
    title: "International Women's Day",
    description:
      "Giving back to the community through donations, clean-up drives, and volunteer support.",
    image: "/assets/Activity/womenday.jpg",
    alt: "International Women's Day",
  },
    {
    title: "After work Chinese Language Class",
    description:
      "Giving back to the community through donations, clean-up drives, and volunteer support.",
    image: "/assets/Activity/class.jpg",
    alt: "Language Class",
  },
];
