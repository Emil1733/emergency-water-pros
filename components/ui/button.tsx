import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = {
  variant: {
    default: "bg-water-primary text-white shadow hover:bg-water-secondary",
    emergency: "bg-emergency text-emergency-foreground shadow hover:bg-emergency-hover",
    destructive: "bg-emergency text-emergency-foreground shadow-sm hover:bg-emergency-hover",
    outline: "border border-gray-300 bg-white shadow-sm hover:bg-gray-50 hover:text-gray-900",
    secondary: "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200",
    ghost: "hover:bg-gray-100 hover:text-gray-900",
    link: "text-water-primary underline-offset-4 hover:underline",
  },
  size: {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  },
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant
  size?: keyof typeof buttonVariants.size
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-water-primary disabled:pointer-events-none disabled:opacity-50"
    const variantClasses = buttonVariants.variant[variant]
    const sizeClasses = buttonVariants.size[size]
    
    return (
      <button
        className={cn(baseClasses, variantClasses, sizeClasses, className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }