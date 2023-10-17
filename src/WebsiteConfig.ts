type Config = {
  siteName: string;
  siteIntroText: string;
  siteIntroImage: string;
  socialLinks: {
    instagram: string;
    facebook: string;
  };
};

const config: Config = {
  siteName: "Reconnect Reiki",
  siteIntroText: `I\’m so glad you\’ve found my little space, here on the internet. Dive in
  and learn more about Reiki, and book a treatment with me. I look forward
  to welcoming you to Reconnect Reiki.`,
  siteIntroImage: "/siteIntroImage.jpeg",
  socialLinks: {
    instagram: "https://www.instagram.com/reconnectreiki2023/",
    facebook:
      "https://www.facebook.com/people/Reconnect-Reiki/100089819217632/",
  },
};

export default config;


