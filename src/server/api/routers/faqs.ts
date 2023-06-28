import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const faqRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.faqs.findMany();
  }),
  create: protectedProcedure
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
  deletebyId: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ input: { id }, ctx }) => {
      return ctx.prisma.faqs.delete({ where: { id: id } });
    }),
});
