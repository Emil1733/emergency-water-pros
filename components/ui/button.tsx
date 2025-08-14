import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const buttonVariants = {
  variant: {
    default: "bg-water-primary text-white shadow hover:bg-water-secondary",
    emergency: "bg-emergency text-emergency-foreground shadow hover:bg-emergency-hover",
    destructive: "bg-emergency text-emergency-foreground shadow-sm hover:bg-emergency-hover",
    outline: "border border-gray-300 bg-white shadow-sm hover:bg-gray-50 hover:text-gray-900",
    "outline-light": "border border-white bg-white/10 text-white shadow-sm hover:bg-white hover:text-gray-900 backdrop-blur-sm",
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
  href?: string
  external?: boolean
}

export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: keyof typeof buttonVariants.variant
  size?: keyof typeof buttonVariants.size
  href: string
  external?: boolean
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps | LinkButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, href, external, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-water-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    const variantClasses = buttonVariants.variant[variant]
    const sizeClasses = buttonVariants.size[size]
    const classes = cn(baseClasses, variantClasses, sizeClasses, className)
    
    // If href is provided, render as link
    if (href) {
      // External link (tel:, mailto:, https:)
      if (external || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')) {
        return (
          <a
            href={href}
            className={classes}
            ref={ref as React.Ref<HTMLAnchorElement>}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          />
        )
      }
      
      // Internal Next.js link
      return (
        <Link 
          href={href} 
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      )
    }
    
    // Default button behavior
    const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>
    return (
      <button
        type={buttonProps.type || "button"}
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...buttonProps}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }