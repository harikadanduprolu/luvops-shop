import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_4px_24px_-4px_hsl(350_30%_70%/0.15)] hover:shadow-[0_12px_40px_-8px_hsl(350_30%_60%/0.2)] hover:scale-[1.02] active:scale-[0.98] rounded-2xl",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[0_4px_24px_-4px_hsl(350_30%_70%/0.15)] hover:bg-destructive/90 rounded-2xl",
        outline:
          "border border-input bg-background shadow-[0_4px_24px_-4px_hsl(350_30%_70%/0.15)] hover:bg-accent hover:text-accent-foreground rounded-2xl",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[0_4px_24px_-4px_hsl(350_30%_70%/0.15)] hover:bg-secondary/80 rounded-2xl",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-2xl",
        link: "text-primary underline-offset-4 hover:underline",
        romantic:
          "bg-gradient-to-r from-primary to-mauve text-primary-foreground shadow-[0_8px_32px_-8px_hsl(350_30%_60%/0.12)] hover:shadow-[0_12px_40px_-8px_hsl(350_30%_60%/0.2)] hover:scale-[1.02] active:scale-[0.98] rounded-2xl",
        glass:
          "backdrop-blur-xl border border-white/20 bg-gradient-to-br from-white/60 to-white/30 text-foreground hover:shadow-[0_12px_40px_-8px_hsl(350_30%_60%/0.2)] hover:scale-[1.02] active:scale-[0.98] rounded-2xl",
        soft:
          "bg-rose-mist text-foreground shadow-[0_4px_24px_-4px_hsl(350_30%_70%/0.15)] hover:shadow-[0_12px_40px_-8px_hsl(350_30%_60%/0.2)] hover:bg-lavender/50 rounded-2xl",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 rounded-xl text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
