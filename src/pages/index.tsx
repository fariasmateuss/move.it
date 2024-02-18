import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { withSSRGuest } from 'utils/withSSRGuest';
import { DASHBOARD_PAGE_PATH } from 'constants/routesPaths';
import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import { Icons } from 'components/icons';
import Head from 'next/head';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from 'components/ui/form';

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async () => ({
    props: {},
  }),
);

const signInFormSchema = z.object({
  username: z.string(),
  password: z.string().min(8),
});

type SignInFormValues = z.infer<typeof signInFormSchema>;

const defaultValues: Partial<SignInFormValues> = {
  username: '',
  password: '',
};

export default function SignIn() {
  const form = useForm<SignInFormValues>({
    defaultValues,
    resolver: zodResolver(signInFormSchema),
  });

  const handleSignInWithGithub = () =>
    signIn('github', { callbackUrl: DASHBOARD_PAGE_PATH });

  const onSubmit: SubmitHandler<SignInFormValues> = () => {
    console.debug('Submited');
  };

  const isButtonDisabled =
    !form.formState.isValid && !form.formState.isSubmitting;

  return (
    <div className="flex h-screen items-stretch bg-primary">
      <Head>
        <title>Sign In</title>
      </Head>

      <Image
        src="/images/background.svg"
        alt="Move.it"
        width={0}
        height={0}
        priority
        quality={80}
        className="w-full object-contain md:w-auto md:min-w-[768px]"
      />

      <section className="flex w-full max-w-[1200px] flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col items-center justify-center sm:w-[350px]">
          <Image
            src="/images/logo-full.svg"
            width={0}
            height={0}
            alt="Move.it"
            className="w-full max-w-[360px] items-center"
          />
          <h1 className="mt-24 text-4xl font-bold text-white">Welcome</h1>
          <p className="mb-10 mt-6 text-highlight">👋 Sign in to get started</p>
          <Form {...form}>
            <div className="grid w-full gap-6">
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem className="space-y-0">
                        <FormLabel className="sr-only" htmlFor="username">
                          Username
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Username" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="space-y-0">
                        <FormLabel className="sr-only" htmlFor="password">
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
                    className="bg-lime-500 text-white hover:bg-lime-600 disabled:bg-primary-foreground"
                    disabled={isButtonDisabled}
                  >
                    Sign In
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
                onClick={handleSignInWithGithub}
              >
                <Icons.gitHub className="mr-2 size-4" />
                Github
              </Button>
            </div>
          </Form>

          <p className="mt-6 px-8 text-center text-sm text-highlight">
            By clicking continue, you agree to our{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
