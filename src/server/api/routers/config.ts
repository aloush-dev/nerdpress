import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const configHandler = createTRPCRouter({
  update: protectedProcedure
    .input(
      z.object({
        websiteName: z.string(),
        backgroundColour: z.string(),
        headerColour: z.string(),
        textColour: z.string(),
      })
    )
    .mutation(
      async ({
        input: { websiteName, backgroundColour, headerColour, textColour },
        ctx,
      }) => {
        const updatedConfig = await ctx.prisma.configuration.update({
          where: { id: 1 },
          data: { websiteName, backgroundColour, headerColour, textColour },
        });
        return updatedConfig;
      }
    ),
  getConfig: protectedProcedure.query(async ({ ctx }) => {
    const config = await ctx.prisma.configuration.findFirst();
    return config;
  }),
});
