import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define your typography variants with cva
const typographyVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors m-0",
  {
    variants: {
      variant: {
        default: "text-[#607B96]",
        active: "text-white",
        primary: "text-[#4D5BCE]",
        secondary: "text-[#43D9AD]",
        tertiary: "text-[#E99287]",
        quaternary: "text-[#C98BDF]",
      },
      size: {
        default: "text-[14px] font-medium",
        sm: "text-[18px] font-medium",
        md: "text-[32px] font-medium",
        lg: "text-[62px] font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  component?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      component: Component = "span",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : Component;

    return (
      <Comp
        className={cn(typographyVariants({ variant, size, className }))}
        ref={ref as React.RefObject<any>} // Cast ref to React.RefObject<any>
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
