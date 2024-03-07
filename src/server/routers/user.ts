import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { Prisma } from '@prisma/client';

import { hashPassword } from 'lib/auth';
import { signUpSchema } from 'lib/schemas/sign-up';

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
  register: protectedProcedure
    .input(
      z.object({
        data: signUpSchema,
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const hashedPassword = await hashPassword(input.data.password);

        const data = {
          name: input.data.name,
          email: input.data.email.toLowerCase(),
          password: hashedPassword,
        };

        await ctx.prisma.user.create({
          data,
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          throw new TRPCError({
            code: 'FORBIDDEN',
            cause: error,
          });
        }

        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === 'P2002'
        ) {
          throw new TRPCError({
            code: 'CONFLICT',
            message: `Email ${input.data.email} already used.`,
          });
        } else {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'An unexpected error occurred, please try again later.',
            cause: error,
          });
        }
      }
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
