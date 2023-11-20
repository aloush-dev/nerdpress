import { z } from "zod";
import {
  createTRPCRouter,
  protectedAdminProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const faqRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.faqs.findMany();
  }),
  create: protectedAdminProcedure
    .input(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    )
    .mutation(({ input: { question, answer }, ctx }) => {
      return ctx.prisma.faqs.create({
        data: { question, answer, userId: ctx.session.user.id },
      });
    }),
  deletebyId: protectedAdminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ input: { id }, ctx }) => {
      return ctx.prisma.faqs.delete({ where: { id: id } });
    }),
  updateDisplayPositions: protectedAdminProcedure
    .input(
      z.array(
        z.object({
          id: z.number(),
          displayPosition: z.number(),
        })
      )
    )
    .mutation(async ({ input, ctx }) => {
      const updateOperations = input.map((faq) =>
        ctx.prisma.faqs.update({
          where: { id: faq.id },
          data: { displayPosition: faq.displayPosition },
        })
      );

      await ctx.prisma.$transaction(updateOperations);

      return "Display positions updated successfully";
    }),
});
