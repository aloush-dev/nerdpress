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
        backgroundColour: z.string().optional(),
        headerColour: z.string().optional(),
        footerColour: z.string().optional(),
        textColour: z.string().optional(),
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
          backgroundColour,
          headerColour,
          footerColour,
          textColour,
          instagramLink,
          facebookLink,
          footerLinks,
        },
        ctx,
      }) => {
        const updateData = {
          websiteName,
          websiteSubTitle,
          backgroundColour,
          headerColour,
          footerColour,
          textColour,
          instagramLink,
          facebookLink,
          footerLinks,
        };

        if (websiteName !== undefined) updateData.websiteName = websiteName;
        if (websiteSubTitle !== undefined)
          updateData.websiteSubTitle = websiteSubTitle;
        if (backgroundColour !== undefined)
          updateData.backgroundColour = backgroundColour;
        if (headerColour !== undefined) updateData.headerColour = headerColour;
        if (footerColour !== undefined) updateData.footerColour = footerColour;
        if (textColour !== undefined) updateData.textColour = textColour;
        if (instagramLink !== undefined)
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
    .input(z.object({ id: z.number(),  active: z.boolean() }))
    .mutation(async ({ input: { id,  active }, ctx }) => {
      const updatedLink = await ctx.prisma.navBarLinks.update({
        where: { id },
        data: { active },
      });

      return updatedLink;
    }),
});
