import * as React from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { IconContext } from 'react-icons';

import { cn } from 'lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [isPasswordHidden, setIsPasswordHidden] = React.useState(
      type === 'password',
    );
    const inputType =
      type === 'password' ? (isPasswordHidden ? 'password' : 'text') : type;
    const isPasswordType = type === 'password';

    const togglePasswordVisibility = () => {
      setIsPasswordHidden(prevState => !prevState);
    };

    const iconContextProviderValue = React.useMemo(
      () => ({
        className: 'bg-transparent',
      }),
      [],
    );

    return (
      <div className="relative w-full">
        <input
          type={inputType}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />

        {isPasswordType && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-4"
            onClick={togglePasswordVisibility}
          >
            <IconContext.Provider value={iconContextProviderValue}>
              {isPasswordHidden ? <LuEyeOff /> : <LuEye />}
            </IconContext.Provider>
          </button>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
