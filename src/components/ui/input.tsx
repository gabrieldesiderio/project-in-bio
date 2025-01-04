import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type inputProps = ComponentProps<'input'> & {}

export function Input({ className, ...props }: inputProps) {
  return (
    <input
      className={cn(
        `w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl
        border border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary`,
        className
      )} 
      {...props}
    />
  )
}