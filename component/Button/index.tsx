import { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// cva helps for conditional tailwind rendering

// cva
export const buttonVariant = cva(
    "bg-[green] p-4",
    {
        variants: {
            variant: {
                default: "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
                outline: "bg-transparent rounded border border-slate-200 hover:border-slate-100 dark:border-slate-700",
            },
            size: {
                default: "h-10 py-2 px-4",
                sm: "h-9 px-2 rounded-md"
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        }
    }
)

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {

}
export const Button: FC<ButtonProps> = ({ className, size, variant, ...props }) => {
    return (
        <button className={cn(buttonVariant({ className, size, variant }))} {...props} />
    )
}

    ;