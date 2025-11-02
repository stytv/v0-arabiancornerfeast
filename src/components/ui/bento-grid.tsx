import React from "react";
import { cn } from "@/lib/utils";

export interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // Changed from fixed height to auto-resizing grid
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = React.memo(function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
  onClick,
}: BentoGridItemProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative flex flex-col justify-between rounded-xl glass-strong neon-border p-5 transition-all duration-300 hover:scale-[1.02] hover:z-10 cursor-pointer overflow-hidden",
        // Allow card to expand naturally
        "min-h-[14rem] sm:min-h-[16rem]",
        className
      )}
    >
      {header && (
        <div className="mb-3 overflow-hidden text-ellipsis">{header}</div>
      )}

      <div className="transition-transform duration-200 group-hover:translate-x-1">
        {icon && <div className="mb-2">{icon}</div>}
        {title && (
          <h3 className="font-bold text-foreground text-lg sm:text-xl mb-1">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-sm text-muted-foreground leading-snug">
            {description}
          </p>
        )}
      </div>
    </div>
  );
});
