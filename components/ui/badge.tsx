import * as React from "react"
import { cn } from "@/lib/utils"

const badgeVariants = {
  variant: {
    default: "border-transparent bg-water-primary text-white shadow hover:bg-water-secondary",
    secondary: "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200",
    destructive: "border-transparent bg-emergency text-emergency-foreground shadow hover:bg-emergency-hover",
    outline: "text-gray-950 border-gray-200",
  },
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants.variant
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseClasses = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-water-primary focus:ring-offset-2"
  const variantClasses = badgeVariants.variant[variant]
  
  return (
    <div className={cn(baseClasses, variantClasses, className)} {...props} />
  )
}

export { Badge, badgeVariants }