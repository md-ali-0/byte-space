import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export default function Button({
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

    const variantStyles = {
        primary:
            "bg-[#D4FB20] text-[#242528] hover:bg-[#c6ee18] hover:shadow-[0_0_24px_rgba(212,251,32,0.45)] shadow-[0_2px_12px_rgba(212,251,32,0.25)]",
        secondary:
            "bg-white text-[#242528] hover:bg-gray-100 shadow-md",
        outline:
            "border border-white/30 text-white hover:bg-white/10 hover:border-white/60",
        ghost:
            "text-[#F5F5F6] hover:bg-white/10",
    };

    const sizeStyles = {
        sm: "h-9 px-4 text-sm rounded-full",
        md: "h-[46px] px-6 text-[16px] rounded-full",
        lg: "h-[52px] px-8 text-[18px] rounded-full",
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
