import { z } from 'zod';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

export const userRouter = createTRPCRouter({
  getMe: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
    });

    return user;
  }),
  allUsersOrderByLevel: publicProcedure.query(async ({ ctx }) => {
    const users = await ctx.prisma.user.findMany({
      orderBy: {
        level: 'desc',
      },
    });

    return users;
  }),
  levelUp: protectedProcedure
    .input(
      z.object({
        data: z.object({
          level: z.number(),
        }),
      }),
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
  completedChallenge: protectedProcedure
    .input(
      z.object({
        data: z.object({
          currentExperience: z.number(),
          challengesCompleted: z.number(),
        }),
      }),
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
