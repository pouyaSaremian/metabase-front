import React from "react";

/**
 * Reusable Button component with consistent styling and behavior
 *
 * @example
 * // Basic button
 * <Button onClick={handleClick}>Click me</Button>
 *
 * @example
 * // Primary button with large size
 * <Button variant="primary" size="lg">Primary Action</Button>
 *
 * @example
 * // Outline button as link
 * <Button variant="outline" href="/demo">View Demo</Button>
 *
 * @example
 * // Disabled button
 * <Button disabled variant="secondary">Disabled</Button>
 */
interface ButtonProps {
  /** Button content */
  children: React.ReactNode;
  /** Visual style variant */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  /** Button size */
  size?: "sm" | "md" | "lg";
  /** If provided, renders as a link instead of button */
  href?: string;
  /** Click handler */
  onClick?: () => void;
  /** Keyboard event handler */
  onKeyDown?: (event: React.KeyboardEvent) => void;
  /** Additional CSS classes */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Button type (only applies when not using href) */
  type?: "button" | "submit" | "reset";
  /** Link target (only applies when using href) */
  target?: string;
  /** Link rel attribute (only applies when using href) */
  rel?: string;
  /** Accessibility label */
  "aria-label"?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  onKeyDown,
  className = "",
  disabled = false,
  type = "button",
  target,
  rel,
  "aria-label": ariaLabel,
}) => {
  // Base styles
  const baseStyles =
    "inline-flex items-center justify-center  rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed";

  // Variant styles using Metabase brand colors
  const variantStyles = {
    primary:
      "bg-metabase-primary text-white hover:bg-metabase-primary-darker focus:ring-metabase-primary",
    secondary:
      "bg-metabase-text-secondary text-white hover:bg-metabase-primary-darker focus:ring-metabase-primary",
    outline:
      "border-1 border-metabase-primary text-metabase-primary hover:bg-metabase-primary hover:text-white focus:ring-metabase-primary",
    ghost:
      "text-metabase-primary hover:bg-metabase-bg-light focus:ring-metabase-primary",
  };

  // Size styles
  const sizeStyles = {
    sm: "px-5 py-1 text-sm",
    md: "px-6 py-1 text-sm",
    lg: "px-8 py-2 text-base",
  };

  // Combine all styles
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // If href is provided, render as link
  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target={target}
        rel={rel}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={combinedStyles}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
