type Service = {
  id: number;
  userId: string;
  title: string;
  price: number;
  description: string;
  displayPosition: number;
};

type Faq = {
  id: number;
  userId: string;
  question: string;
  answer: string;
  displayPosition: number;
};

type BlogPost = {
  id: string;
  userId: string;
  title: string;
  content: string;
  slug: string;
  createdAt: Date;
  category: string;
};

type Category = {
  id: string;
  name: string;
};
