import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function Button({ className, variant = 'primary', children, ...props}: ButtonProps) {
  return (
    <button 
      className={cn(
        'p-3 text-white rounded-xl font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70',
        variant === 'primary' && 'bg-accent-purple',
        variant === 'secondary' && 'bg-background-tertiary',
        variant === 'ghost' && 'border-border-primary',
        className
      )} 
      {...props}
    >
      {children}
    </button>
  )
}