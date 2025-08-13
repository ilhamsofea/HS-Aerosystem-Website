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
    "A joyful year-end celebration with games, laughter, and shared memories to start the new year on a high note.",
  image: "/assets/Activity/newyear.jpg",
  alt: "Christmas/New Year Celebration",
},
{
  title: "Hari Raya Celebration",
  description:
    "A vibrant celebration of togetherness, sharing traditional food and culture in the spirit of Hari Raya.",
  image: "/assets/Activity/raya.png",
  alt: "Hari Raya Celebration",
},
{
  title: "Chinese New Year Celebration",
  description:
    "Welcoming the Lunar New Year with cultural traditions, festive treats, and cheerful team spirit.",
  image: "/assets/Activity/cny.jpg",
  alt: "Chinese New Year Celebration",
},

  {
    title: "International Women's Day",
    description:
      "Honoring women’s achievements with activities and recognition events.",
    image: "/assets/Activity/womenday.jpg",
    alt: "International Women's Day",
  },
  {
    title: "After work Chinese Language Class",
    description:
      "Encouraging cultural learning through casual language sessions.",
    image: "/assets/Activity/class.jpg",
    alt: "Language Class",
  },
];
