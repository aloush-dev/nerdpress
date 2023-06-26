import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
  getPostById: publicProcedure
    .input(z.object({ postId: z.string() }))
    .query(({ input: { postId }, ctx }) => {
      return ctx.prisma.post.findUnique({
        where: { id: postId },
      });
    }),
  create: protectedProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(async ({ input: { title, content }, ctx }) => {
      const post = await ctx.prisma.post.create({
        data: { title, content, userId: ctx.session.user.id },
      });

      return post;
    }),
});
