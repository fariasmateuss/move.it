import { signIn } from 'next-auth/react';

export default function Component() {
  return (
    <>
      Not signed in <br />
      <button
        type="button"
        onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
      >
        Sign in
      </button>
    </>
  );
}
