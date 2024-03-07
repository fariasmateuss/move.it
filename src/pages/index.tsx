import * as React from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';

import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import { Icons } from 'components/icons';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from 'components/ui/form';
import { AuthLayout } from 'components/layout/auth';
import { useSignIn } from 'hooks/auth/sign-in';
import { getCsrfToken } from 'next-auth/react';

export const getServerSideProps = (async () => {
  const csrfToken = String(await getCsrfToken());

  return {
    props: {
      csrfToken,
    },
  };
}) satisfies GetServerSideProps;

export default function SignIn({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { form, onProviderLogin, onLoginEmail, isButtonDisabled, isLoading } =
    useSignIn();

  return (
    <AuthLayout title="Welcome" description="👋 Sign in to get started">
      <Head>
        <title>Sign in | move.it</title>
      </Head>

      <Form {...form}>
        <div className="grid w-full gap-6">
          <form onSubmit={form.handleSubmit(onLoginEmail)}>
            <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid gap-2 space-y-0">
                    <FormLabel className="text-highlight" htmlFor="emial">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        autoCorrect="off"
                        autoComplete="email"
                        autoCapitalize="none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="grid gap-2 space-y-0">
                    <FormLabel className="text-highlight" htmlFor="password">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="w-full bg-lime-500 text-white hover:bg-lime-600 disabled:bg-primary-foreground"
                disabled={isButtonDisabled}
              >
                {isLoading ? 'Redirecting' : 'Sign In with Email'}
              </Button>
            </div>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-highlight" />
            </div>

            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-primary px-2 text-highlight">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            className="bg-neutral-900 text-white hover:bg-neutral-950"
            type="button"
            onClick={() => onProviderLogin('github')}
          >
            <Icons.gitHub className="mr-2 size-4" />
            Github
          </Button>
        </div>
      </Form>

      <p className="mt-6 px-8 text-center text-sm text-highlight">
        By clicking continue, you agree to our{' '}
        <Link href="/terms" className="underline underline-offset-4">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="/privacy" className="underline underline-offset-4">
          Privacy Policy
        </Link>
        .
      </p>
    </AuthLayout>
  );
}
