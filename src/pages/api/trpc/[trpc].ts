import { createNextApiHandler } from '@trpc/server/adapters/next';

import { createTRPCContext } from 'server/trpc';
import { appRouter } from 'server/root';
import { env } from 'env/server.mjs';

export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === 'development'
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,
          );
        }
      : undefined,
});
