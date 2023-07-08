import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
  protectedAdminProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
  getPostById: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ input: { slug }, ctx }) => {
      return ctx.prisma.post.findFirst({
        where: { slug: slug },
      });
    }),
  getPostByCategory: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input: { name }, ctx }) => {
      return ctx.prisma.post.findMany({ where: { category: name } });
    }),
  create: protectedAdminProcedure
    .input(
      z.object({
        title: z.string(),
        slug: z.string(),
        content: z.string(),
        category: z.string(),
      })
    )
    .mutation(({ input: { title, slug, content, category }, ctx }) => {
      return ctx.prisma.post.create({
        data: { title, slug, content, category, userId: ctx.session.user.id },
      });
    }),
  update: protectedAdminProcedure
    .input(z.object({ id: z.string(), content: z.string() }))
    .mutation(({ input: { id, content }, ctx }) => {
      return ctx.prisma.post.update({
        where: { id },
        data: { content },
      });
    }),
});
