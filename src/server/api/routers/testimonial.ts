import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
  protectedAdminProcedure,
} from "~/server/api/trpc";

export const testimonialRouter = createTRPCRouter({
  getApprovedTestimonials: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.testimonials.findMany({ where: { approved: true } });
  }),
  getFeaturedTestimonials: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.testimonials.findMany({ where: { featured: true } });
  }),
  create: protectedProcedure
    .input(z.object({ content: z.string() }))
    .mutation(({ input: { content }, ctx }) => {
      const userName = ctx.session.user?.name || "Anonymous";

      return ctx.prisma.testimonials.create({
        data: {
          content,
          postedBy: userName,
          user: { connect: { id: ctx.session.user?.id } },
        },
      });
    }),
});
