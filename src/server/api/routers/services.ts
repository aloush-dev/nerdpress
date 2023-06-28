import { z } from "zod";
import {
  createTRPCRouter,
  protectedAdminProcedure,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const serviceRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.service.findMany();
  }),
  create: protectedAdminProcedure
    .input(
      z.object({
        title: z.string(),
        price: z.number(),
        description: z.string(),
      })
    )
    .mutation(({ input: { title, price, description }, ctx }) => {
      return ctx.prisma.service.create({
        data: { title, price, description, userId: ctx.session.user.id },
      });
    }),
  deletebyId: protectedAdminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ input: { id }, ctx }) => {
      return ctx.prisma.service.delete({ where: { id: id } });
    }),
});
