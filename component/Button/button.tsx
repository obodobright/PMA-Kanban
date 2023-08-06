import { ButtonHTMLAttributes, FC } from "react"
import { VariantProps, cva, } from "class-variance-authority"
import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge";


const buttonVariant = cva(
    "p-4 rounded flex items-center justify-center bg-black text-white",
    {
        variants: {
            variant: {
                default: "flex items-center hover:bg-slate-200",
                outline: "border border-slate-200 rounded cursor-pointer"
            },
            size: {
                default: "h-10 text-xl font-bold",
                sm: "h-8 font-light text-good"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant> {

}

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const MyButton: FC<ButtonProps> = ({ className, size, variant, ...props }) => {
    return (
        <button {...props} className={cn(buttonVariant({ className, size, variant }))} />
    )
}

