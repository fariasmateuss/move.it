import * as React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

import { toast, useToast } from 'hooks/use-toast';
import { ToastAction } from 'components/ui/toast';
import { signUpSchema } from 'lib/schemas/sign-up';
import { trpc } from 'utils/trpc';
import { SIGN_IN_PAGE_PATH } from 'constants/routes-paths';

const signUpFormSchema = signUpSchema
  .extend({
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: `Password don't match`,
  });

type SignUpFormValues = z.infer<typeof signUpFormSchema>;

const defaultValues: Partial<SignUpFormValues> = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export function useSignUp() {
  const [isLoading, toggleLoading] = React.useState(false);

  const { toast } = useToast();

  const form = useForm<SignUpFormValues>({
    defaultValues,
    resolver: zodResolver(signUpFormSchema),
  });

  const router = useRouter();

  const signUpMutation = trpc.user.register.useMutation();

  const onSignUp: SubmitHandler<SignUpFormValues> = async ({
    name,
    email,
    password,
  }) => {
    try {
      toggleLoading(true);

      await signUpMutation.mutateAsync(
        {
          data: {
            name,
            email,
            password,
          },
        },
        {
          onSuccess: (_data, variables) => {
            toast({
              title: `Hi, ${variables.data.name}. Thank you for signing up!`,
              description: 'You now have access to all our features.',
              action: (
                <ToastAction
                  altText="Go to sign in page"
                  onClick={() => router.push(SIGN_IN_PAGE_PATH)}
                >
                  Continue
                </ToastAction>
              ),
            });
          },
          onError: (error, _variables, _context) => {
            toast({
              variant: 'destructive',
              title: 'There was a problem with your request.',
              description: error.message,
              action: <ToastAction altText="Try again">Try Again</ToastAction>,
            });
          },
        },
      );
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

  const isButtonDisabled =
    !form.formState.isValid || form.formState.isSubmitting || isLoading;

  return {
    form,
    onSignUp,
    isButtonDisabled,
    isLoading,
  };
}
