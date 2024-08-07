import { FeaturedWork } from "./types/types";

export const featuredWorks: FeaturedWork[] = [
  {
    id: 1,
    imgUrl: "/works/lesread.png",
    header: "LesRead: BookStore",
    description:
      "LesRead is an online bookstore where you can find a wide selection of books across various genres. Whether you're searching for a new thriller, a classic novel, or a self-help guide, LesRead has something for everyone.",
    details: {
      date: "2024-01-05",
      about: "E-Commerce & Web Development",
    },
    description2:
      "LesRead offers a user-friendly interface for browsing and purchasing books. It features a comprehensive search function, detailed book descriptions, and secure payment options. The platform is designed to provide a seamless and enjoyable online shopping experience for book lovers.",
    href: "https://lesread.netlify.app/",
  },
  {
    id: 2,
    imgUrl: "/works/miligram.png",
    header: "Miligram: Instagram-Inspired Social Network",
    description:
      "Miligram is a simple social networking app that allows users to share posts, comment, and engage with each other. It's a great way to connect with friends and family, share your thoughts, and explore different perspectives.",
    details: {
      date: "2024-01-05",
      about: "Social Media & Web Development",
    },
    description2:
      "Miligram focuses on a streamlined user experience. Users can create posts, categorize them, and leave comments.  The app utilizes local storage to maintain user data, ensuring a personalized experience. While it's a single-user application, it provides a glimpse into the core functionalities of a social network.  Miligram is a great example of how to build a basic social media platform using web technologies.",
    href: "https://miligram.vercel.app/",
  },
  {
    id: 3,
    imgUrl: "/works/proposal2.png",
    header: "Valentine Special: A Romantic Web Experience",
    description:
      "This is a fun and interactive web project designed to create a special Valentine's Day experience. It's a unique way to surprise your loved one and express your feelings.",
    details: {
      date: "2024-01-05",
      about: "Web Development & User Experience",
    },
    description2:
      "Upon opening, you'll be greeted with a beautiful letter-style page where you can write a personalized message for your loved one.  After reading the letter, a charming user interface appears, asking the special person to be your Valentine.  A 'yes' response will take them to your inbox, while a 'no' will trigger a playful, infinite 'no' response, adding a touch of humor to the experience. The project is a creative blend of web design and interactive elements, making it a memorable way to celebrate Valentine's Day.",
    imgUrl2: "/works/proposal1.png",
  },
];
