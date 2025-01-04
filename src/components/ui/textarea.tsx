import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type TextareaProps = ComponentProps<'textarea'> & {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        `w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl
        border border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary`,
        className
      )} 
      {...props}
    />
  )
}