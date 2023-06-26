import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const serviceRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.service.findMany();
  }),
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        price: z.number(),
        description: z.string(),
      })
    )
    .mutation(async ({ input: { title, price, description }, ctx }) => {
      const service = await ctx.prisma.service.create({
        data: { title, price, description, userId: ctx.session.user.id },
      });

      return service;
    }),
});
