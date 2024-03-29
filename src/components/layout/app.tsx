import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

import { cn } from 'lib/utils';
import { Button } from 'components/ui/button';
import { Icons } from 'components/icons';

import { SIDEBAR_NAVIGATION } from 'constants/layouts';

export function AppLayout({ children }: React.PropsWithChildren<unknown>) {
  const route = useRouter();

  return (
    <main className="flex">
      <nav className="relative flex h-screen w-28 flex-col justify-between bg-white align-middle">
        <div className="mt-8 flex justify-center">
          <Image
            src="/images/logo.svg"
            alt="Move.it"
            width={48}
            height={42}
            priority
            quality={100}
          />
        </div>

        <div className="flex w-full flex-col gap-8">
          {SIDEBAR_NAVIGATION.map(({ path, Icon }) => (
            <Button
              variant="ghost"
              key={path}
              className={cn(
                route.pathname === path && 'text-primary',
                'animate hover:text- relative flex h-14 justify-center bg-transparent align-middle hover:bg-transparent hover:text-primary',
              )}
              type="button"
              onClick={() => route.push(path)}
            >
              <div
                className={cn(
                  route.pathname === path && 'bg-primary',
                  'absolute left-0 h-full w-[5px] rounded-r-md',
                )}
              />
              <Icon className="size-8" />
            </Button>
          ))}
        </div>

        <Button
          variant="ghost"
          type="button"
          className={cn(
            'mb-8 bg-transparent text-red-500 hover:bg-transparent hover:text-red-600 ',
          )}
          onClick={() => signOut()}
        >
          <Icons.logout className="size-8" />
        </Button>
      </nav>
      {children}
    </main>
  );
}
