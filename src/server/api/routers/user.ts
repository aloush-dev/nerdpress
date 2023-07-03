import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
  protectedAdminProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  updateProfile: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input: { name }, ctx }) => {
      return ctx.prisma.user.update({
        where: { id: ctx.session.user.id },
        data: { name },
      });
    }),
});
