import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { Icons } from './icons';

type LevelUpDialogProps = {
  open: boolean;
  onOpenChange(open: boolean): void;
  level: number;
};

export function LevelUpDialog({
  level,
  onOpenChange,
  open,
}: LevelUpDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 w-auto bg-background opacity-80" />
        <Dialog.Content className="fixed inset-auto left-1/2 top-1/2 flex w-full max-w-96 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center overflow-hidden rounded-md bg-white pb-12 pt-12 outline-none">
          <Dialog.Close
            className="absolute right-2 top-2 flex h-10 w-10 flex-shrink-0 items-center justify-center border-0 border-input bg-transparent"
            type="button"
            onClick={prevState => onOpenChange(!prevState)}
          >
            <Icons.close />
          </Dialog.Close>

          <header className="bg-levelup mb-6 flex w-[inherit] items-center justify-center bg-contain bg-center bg-no-repeat text-[140px] font-semibold leading-[100px] text-primary">
            {level}
          </header>

          <strong className="text-3xl font-semibold leading-10 text-title">
            Congratulations
          </strong>
          <p className="mt-1 text-xl font-normal leading-7">
            You have reached a new level
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
