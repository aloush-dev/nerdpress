import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { configHandler } from "~/server/api/routers/config";
import { serviceRouter } from "~/server/api/routers/services";
import { faqRouter } from "./routers/faqs";
// import { contactFormRouter } from "./routers/contact";
import { userRouter } from "./routers/user";
import { testimonialRouter } from "./routers/testimonial";
import { categoryRouter } from "./routers/category";
import { aboutRouter } from "./routers/about";

export const appRouter = createTRPCRouter({
  post: postRouter,
  config: configHandler,
  service: serviceRouter,
  faqs: faqRouter,
  // contact: contactFormRouter,
  userProfile: userRouter,
  testimonials: testimonialRouter,
  category: categoryRouter,
  about: aboutRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
