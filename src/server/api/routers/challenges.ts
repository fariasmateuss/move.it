import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '../trpc';

export const challengesRouter = createTRPCRouter({
  enhanceChallengesCompleted: protectedProcedure
    .input(
      z.object({
        challengesCompleted: z.number(),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          challengesCompleted: input.challengesCompleted,
        },
      });
    }),
  enhanceLevel: protectedProcedure
    .input(
      z.object({
        level: z.number(),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          level: input.level,
        },
      });
    }),
  enhanceExperience: protectedProcedure
    .input(
      z.object({
        currentExperience: z.number(),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          currentExperience: input.currentExperience,
        },
      });
    }),
});
