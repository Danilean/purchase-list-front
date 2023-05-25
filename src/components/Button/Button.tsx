import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export function Button({ fullWidth = false, children, ...props }: ButtonProps) {
  return (
    <div className="grid gap-2">
      <button
        {...props}
        className={`border rounded bg-green-600 text-white font-semibold py-2 px-4 ${
          fullWidth && "w-full"
        }`}
      >
        {children}
      </button>
    </div>
  );
}
