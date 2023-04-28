import { createTRPCRouter } from './trpc';
import { userRouter } from './routers/user';
import { challengesRouter } from './routers/challenges';

export const appRouter = createTRPCRouter({
  user: userRouter,
  challenges: challengesRouter,
});

export type AppRouter = typeof appRouter;
