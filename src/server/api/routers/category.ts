import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedAdminProcedure,
} from "~/server/api/trpc";

export const categoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.category.findMany();
  }),
  create: protectedAdminProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input: { name }, ctx }) => {
      return ctx.prisma.category.create({
        data: { name },
      });
    }),
});
