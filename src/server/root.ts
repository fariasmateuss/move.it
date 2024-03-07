import { createTRPCRouter } from './trpc';
import { userRouter } from './routers/user';
import { authRouter } from './routers/auth';

export const appRouter = createTRPCRouter({
  user: userRouter,
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
