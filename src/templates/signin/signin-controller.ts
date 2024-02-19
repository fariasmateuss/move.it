import { z } from 'zod';

import { signInFormSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { DASHBOARD_PAGE_PATH } from 'constants/routesPaths';

type SignInFormValues = z.infer<typeof signInFormSchema>;

const defaultValues: Partial<SignInFormValues> = {
  username: '',
  password: '',
};
export function useSignInController() {
  const form = useForm<SignInFormValues>({
    defaultValues,
    resolver: zodResolver(signInFormSchema),
  });

  const onSignInWithGitHub = () =>
    signIn('github', { callbackUrl: DASHBOARD_PAGE_PATH });

  const onSubmit: SubmitHandler<SignInFormValues> = () => {
    console.log('Submited');
  };

  const isButtonDisabled =
    !form.formState.isValid && !form.formState.isSubmitting;

  return {
    form,
    onSignInWithGitHub,
    onSubmit,
    isButtonDisabled,
  };
}
