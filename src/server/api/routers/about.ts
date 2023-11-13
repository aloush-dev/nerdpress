import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedAdminProcedure,
} from "~/server/api/trpc";

export const aboutRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
});
