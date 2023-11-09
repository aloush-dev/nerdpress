import { z } from "zod";

import {
  createTRPCRouter,
  protectedAdminProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const configHandler = createTRPCRouter({
  update: protectedAdminProcedure
    .input(
      z.object({
        websiteName: z.string().optional(),
        websiteSubTitle: z.string().optional(),
        instagramLink: z.string().optional(),
        facebookLink: z.string().optional(),
        footerLinks: z.boolean().optional(),
      })
    )
    .mutation(
      async ({
        input: {
          websiteName,
          websiteSubTitle,
          instagramLink,
          facebookLink,
          footerLinks,
        },
        ctx,
      }) => {
        const updateData = {
          websiteName,
          websiteSubTitle,
          instagramLink,
          facebookLink,
          footerLinks,
        };

        if (websiteName !== undefined) updateData.websiteName = websiteName;
        if (websiteSubTitle !== undefined)
          updateData.websiteSubTitle = websiteSubTitle;
        updateData.instagramLink = instagramLink;
        if (facebookLink !== undefined) updateData.facebookLink = facebookLink;
        if (footerLinks !== undefined) updateData.footerLinks = footerLinks;

        if (Object.keys(updateData).length === 0) {
          return null;
        }

        const updatedConfig = await ctx.prisma.configuration.update({
          where: { id: 1 },
          data: updateData,
        });

        return updatedConfig;
      }
    ),
  getConfig: publicProcedure.query(async ({ ctx }) => {
    const config = await ctx.prisma.configuration.findFirst();
    return config;
  }),
  getNavBarLinks: publicProcedure.query(async ({ ctx }) => {
    const navBarLinks = await ctx.prisma.navBarLinks.findMany();
    return navBarLinks;
  }),
  createNavBarLink: protectedAdminProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input: { name }, ctx }) => {
      return ctx.prisma.navBarLinks.create({ data: { name, active: true } });
    }),
  updateNavBarLink: protectedAdminProcedure
    .input(z.object({ id: z.number(), active: z.boolean() }))
    .mutation(async ({ input: { id, active }, ctx }) => {
      const updatedLink = await ctx.prisma.navBarLinks.update({
        where: { id },
        data: { active },
      });

      return updatedLink;
    }),
  getColours: publicProcedure.query(async ({ ctx }) => {
    const colours = await ctx.prisma.colourScheme.findMany();
    return colours;
  }),
  createColour: protectedAdminProcedure
    .input(z.object({ name: z.string(), hex: z.string() }))
    .mutation(({ input: { name, hex }, ctx }) => {
      return ctx.prisma.colourScheme.create({ data: { name, hex } });
    }),
  updateColour: protectedAdminProcedure
    .input(z.object({ id: z.number(), name: z.string(), hex: z.string() }))
    .mutation(async ({ input: { id, name, hex }, ctx }) => {
      const updatedColour = await ctx.prisma.colourScheme.update({
        where: { id },
        data: { name, hex },
      });

      return updatedColour;
    }),
});
