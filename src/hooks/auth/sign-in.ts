import * as React from 'react';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useToast } from 'hooks/use-toast';
import { DASHBOARD_PAGE_PATH } from 'constants/routes-paths';
import { signInSchema as signInFormSchema } from 'lib/schemas/sign-in';

type SignInFormValues = z.infer<typeof signInFormSchema>;

const defaultValues: Partial<SignInFormValues> = {
  email: '',
  password: '',
};

export function useSignIn() {
  const [isLoading, toggleLoading] = React.useState(false);

  const form = useForm<SignInFormValues>({
    defaultValues,
    resolver: zodResolver(signInFormSchema),
    mode: 'onBlur',
  });

  const { toast } = useToast();

  const router = useRouter();

  const onLoginEmail: SubmitHandler<SignInFormValues> = async ({
    email,
    password,
  }) => {
    try {
      toggleLoading(true);
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (!res?.error && res?.ok && res.status === 200) {
        router.push(DASHBOARD_PAGE_PATH);
      }

      if (res?.error && !res?.ok) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: res.error,
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: (error as Error).message,
      });
    } finally {
      toggleLoading(false);
    }
  };

  const onProviderLogin = async (provider: string, redirect = true) => {
    try {
      await signIn(provider, { callbackUrl: DASHBOARD_PAGE_PATH, redirect });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      });
    }
  };

  const isButtonDisabled =
    !form.formState.isValid || form.formState.isSubmitting || isLoading;

  return {
    form,
    onProviderLogin,
    onLoginEmail,
    isButtonDisabled,
    isLoading,
  };
}
