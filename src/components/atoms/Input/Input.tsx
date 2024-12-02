import React from "react";

import { Input as ShadcnInput } from "@/components/ui/input";
import { InputProps } from "@/components/ui/input";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ children, ...props }, ref) => {
    return (
      <ShadcnInput ref={ref} {...props}>
        {children}
      </ShadcnInput>
    );
  }
);

Input.displayName = "Input";
