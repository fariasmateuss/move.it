import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '../trpc';

export const userRouter = createTRPCRouter({
  getMe: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
    });

    return user;
  }),
  update: protectedProcedure
    .input(
      z.object({
        data: z.object({
          currentExperience: z.number().optional(),
          challengesCompleted: z.number().optional(),
          level: z.number().optional(),
        }),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: input.data,
      });

      return user;
    }),
});
