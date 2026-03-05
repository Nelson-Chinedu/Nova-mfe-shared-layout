import { FC, InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";
import { Typography } from "~/components";
import { Controller, FieldError, useForm } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  control: any;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  containerClassName?: string;
  className?: string;
  label?: string;
  name?: string;
  error?: FieldError;
}

const Input: FC<InputProps> = ({
  label,
  startIcon,
  endIcon,
  className,
  containerClassName,
  control,
  name,
  error,
  ...props
}) => {
  return (
    <div>
      {label && (
        <Typography variant="p" className="text-sm pb-1">
          {label}
          <span className="text-red-400">*</span>
        </Typography>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <div className={cn("relative flex items-center w-full", containerClassName)}>
              {/* Start Icon */}
              {startIcon && (
                <div className="absolute left-3 flex items-center pointer-events-none text-gray-500">{startIcon}</div>
              )}
              <input
                {...field}
                {...props}
                data-formstate={error ? "error" : "valid"}
                className={cn(
                  "border rounded-sm py-2 w-full outline-0 transition-all focus:border-brand",
                  "data-[formstate=error]:border-red-400",
                  startIcon ? "pl-10" : "pl-3",
                  endIcon ? "pr-10" : "pr-3",
                  className,
                )}
              />

              {/* End Icon */}
              {endIcon && (
                <div className="absolute right-3 flex items-center cursor-pointer text-gray-500">{endIcon}</div>
              )}
            </div>
            <p data-formstate={error ? "error" : "valid"} className="data-[formstate=error]:text-red-400 text-xs">
              {error?.message}
            </p>
          </>
        )}
      />
    </div>
  );
};

export default Input;
