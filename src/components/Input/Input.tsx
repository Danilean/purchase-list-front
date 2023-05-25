import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div className="grid gap-2">
      <label className="font-semibold text-white" htmlFor={label}>
        {label}
      </label>
      <input {...props} className="border rounded p-2" />
    </div>
  );
}
