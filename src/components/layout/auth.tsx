import * as React from 'react';
import Image from 'next/image';

export type AuthLayoutProps = {
  title: string;
  description: string;
};

export function AuthLayout({
  title,
  description,
  children,
}: React.PropsWithChildren<AuthLayoutProps>) {
  return (
    <div className="flex h-screen items-stretch bg-primary">
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
          <h1 className="mt-24 text-4xl font-bold text-white">{title}</h1>
          <p className="mb-10 mt-6 text-highlight">{description}</p>

          {children}
        </div>
      </section>
    </div>
  );
}
