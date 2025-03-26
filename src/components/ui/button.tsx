import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: [
          "bg-gradient-to-br from-primary to-primary-600 text-primary-foreground shadow-md",
          "hover:shadow-lg hover:translate-y-[-1px] hover:brightness-110 active:translate-y-[1px] active:shadow-sm",
          "after:absolute after:inset-0 after:rounded-md after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100",
          "after:bg-gradient-to-tr after:from-transparent after:via-white/5 after:to-transparent after:blur-sm"
        ],
        destructive: [
          "bg-gradient-to-br from-destructive to-destructive-600 text-destructive-foreground shadow-md",
          "hover:shadow-lg hover:translate-y-[-1px] hover:brightness-110 active:translate-y-[1px] active:shadow-sm",
          "after:absolute after:inset-0 after:rounded-md after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100",
          "after:bg-gradient-to-tr after:from-transparent after:via-white/5 after:to-transparent after:blur-sm"
        ],
        outline: [
          "border-2 border-input bg-background shadow-sm",
          "hover:bg-accent/30 hover:text-accent-foreground hover:border-accent hover:shadow-md active:shadow-sm",
          "before:absolute before:inset-0 before:rounded-md before:border-2 before:border-transparent before:opacity-0 before:transition-all",
          "hover:before:inset-[-3px] hover:before:opacity-100 hover:before:border-accent/20"
        ],
        secondary: [
          "bg-gradient-to-br from-secondary to-secondary-600 text-secondary-foreground shadow-sm",
          "hover:shadow-md hover:translate-y-[-1px] hover:brightness-105 active:translate-y-[1px] active:shadow-sm",
          "after:absolute after:inset-0 after:rounded-md after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100",
          "after:bg-gradient-to-tr after:from-transparent after:via-white/5 after:to-transparent after:blur-sm"
        ],
        ghost: [
          "text-foreground hover:bg-accent/40 hover:text-accent-foreground",
          "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:translate-x-[-50%]",
          "after:bg-accent-foreground after:transition-all after:duration-300 after:ease-in-out after:content-['']",
          "hover:after:w-4/5"
        ],
        link: [
          "text-primary underline-offset-4 p-0 h-auto",
          "after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0",
          "after:bg-current after:transition-transform after:duration-300 after:ease-in-out after:content-['']",
          "hover:after:origin-bottom-left hover:after:scale-x-100"
        ],
        glow: [
          "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary)/0.5)]",
          "hover:shadow-[0_0_25px_rgba(var(--primary)/0.65)] hover:brightness-110",
          "after:absolute after:inset-0 after:rounded-md after:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.25),transparent_60%)]"
        ],
        glass: [
          "bg-white/10 backdrop-filter backdrop-blur-md text-foreground border border-white/20",
          "shadow-sm hover:bg-white/20 hover:shadow-md",
          "after:absolute after:inset-0 after:rounded-md after:bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)]",
          "after:transform after:skewX(-20deg) after:translate-x-[-150%] hover:after:translate-x-[150%] after:transition-transform after:duration-1000"
        ],
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-8 rounded-md px-3.5 py-1.5 text-xs",
        lg: "h-12 rounded-lg px-8 py-3 text-base",
        xl: "h-14 rounded-lg px-10 py-4 text-lg",
        icon: "h-10 w-10 rounded-full",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        spin: "[&_svg]:animate-spin",
        ping: "animate-ping"
      },
      rounded: {
        default: "rounded-md",
        none: "rounded-none",
        sm: "rounded-sm",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
        pill: "rounded-full px-8",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
      rounded: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animation, rounded, asChild = false, leftIcon, rightIcon, loading, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, animation, rounded, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {leftIcon && !loading && leftIcon}
        {children}
        {rightIcon && rightIcon}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }