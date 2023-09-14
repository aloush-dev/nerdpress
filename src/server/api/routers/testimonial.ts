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
  getNonApprovedTestimonials: protectedAdminProcedure.query(({ ctx }) => {
    return ctx.prisma.testimonials.findMany({ where: { approved: false } });
  }),
  getFeaturedTestimonials: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.testimonials.findMany({ where: { featured: true } });
  }),
  updateToApproved: protectedAdminProcedure
    .input(z.object({ id: z.string(), approved: z.boolean() }))
    .mutation(({ input: { id, approved }, ctx }) => {
      return ctx.prisma.testimonials.update({
        where: { id },
        data: { approved },
      });
    }),
  create: publicProcedure
    .input(z.object({ postedBy: z.string(), content: z.string() }))
    .mutation(({ input: { postedBy, content }, ctx }) => {
      const userName = ctx.session?.user.name || postedBy;

      return ctx.prisma.testimonials.create({
        data: {
          content,
          postedBy: userName,
          user: { connect: { id: process.env.USER_ID } },
        },
      });
    }),
  createAdmin: protectedAdminProcedure
    .input(z.object({ postedBy: z.string(), content: z.string() }))
    .mutation(({ input: { postedBy, content }, ctx }) => {
      return ctx.prisma.testimonials.create({
        data: {
          content,
          postedBy,
          approved: true,
          user: { connect: { id: ctx.session.user?.id } },
        },
      });
    }),
});
